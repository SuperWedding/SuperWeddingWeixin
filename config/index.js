/*!
 * SuperWedding - config/index.js
 */

"use strict";

/**
 * Module dependencies.
 */

var fs = require('fs');
var path = require('path');
var version = fs.readFileSync(path.join(__dirname, 'version'), 'utf8').trim();

var config = {
  appName: 'SuperWedding',
  version: version,
  debug: true,
  enableCluster: true,
  port: 9001,
  serverHost: 'http://218.245.3.219:9001',
  reportTo: 'RockDai <rockdai@qq.com>',
  warningTo: 'RockDai <rockdai@qq.com>',
  logdir: path.join(process.env.HOME, 'logs'),
  // 数据库相关配置
  mysql: {
    servers: [
      {
        host: 'keydiary.mysql.rds.aliyuncs.com',
        user: 'rockdai',
        password: 'internet',
        database: 'wedding'
      }
    ],
    maxConnection: 20
  },
  // 微信公众账号相关配置
  wechat: {
    token: 's!E@c#r$E%t1'
  }
};

var customConfig = path.join(__dirname, 'config.js');

if (fs.existsSync(customConfig)) {
  var options = require(customConfig);
  for (var k in options) {
    config[k] = options[k];
  }
}

if (!fs.existsSync(config.logdir)) {
  fs.mkdirSync(config.logdir);
}

module.exports = config;