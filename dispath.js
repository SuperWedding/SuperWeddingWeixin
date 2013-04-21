/*!
 * SuperWedding - dispath.js, dispatch app workers.
 */

"use strict";

/**
 * Module dependencies.
 */

var util = require('util');
var path = require('path');
var config = require('./config');
var logger = require('./common/log');

var workerPath = path.join(__dirname, '/worker.js');

if (config.enableCluster) {

  var cluster = require('cluster');
  var restartTime = 5000;

  cluster.setupMaster({
    exec: workerPath
  });

  cluster.on('fork', function (worker) {
    console.log('[%s] [worker:%d] new worker start', new Date(), worker.process.pid);
  });

  cluster.on('exit', function (worker, code, signal) {
    var exitCode = worker.process.exitCode;
    var err = new Error(util.format('worker %s died (code: %s, signal: %s)', worker.process.pid, exitCode, signal));
    err.name = 'WorkerDiedError';
    logger.error(err);

    // restart
    setTimeout(function () {
      cluster.fork();
    }, restartTime);
  });

  var numCPUs = require('os').cpus().length;
  // fork workers
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

} else {
  require(workerPath);
}

console.log('[%s] [master:%d] Server started, listen at %d, cluster: %s',
  new Date(), process.pid, config.port, config.enableCluster);