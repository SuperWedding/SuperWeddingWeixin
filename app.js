/*!
 * SuperWedding - app.js
 */

"use strict";

/**
 * Module dependencies.
 */

require('response-patch');
var http = require('http');
var connect = require('connect');
var urlrouter = require('urlrouter');
var config = require('./config');
var routes = require('./routes');

/**
 * Init App and Middlewares
 */
var app = connect(
  function (req, res, next) {
    // sucks middleware : https://github.com/visionmedia/node-response-send/issues/1
    if (!res.req) {
      res.req = req;
    }
    next();
  },
  connect.query()
);

/**
 * static file serice
 */
if (config.debug) {
  app.use('/assets', connect.static(__dirname + '/assets'));
} else {
  app.use('/assets', connect.static(__dirname + '/assets', { maxAge: 3600000 * 24 * 365 }));
}

app.use(connect.bodyParser());
app.use(urlrouter(routes));

/**
 * Error handler
 */
app.use(function (err, req, res, next) {
  err.url = err.url || req.url;
  // console.log(err.stack);
  res.statusCode = parseInt(err.status, 10) || 500;
  if (res.statusCode === 403) {
    return res.end('forbidden.');
  }
  logger.error(err);
  res.end('oops! error occurred.');
});

/**
 * Page not found handler
 */
app.use(function (req, res, next) {
  res.statusCode = 404;
  res.end('oops! page not found.');
});

app = http.createServer(app);

module.exports = app;
