/*!
 * SuperWedding - app.js
 */

"use strict";

/**
 * Module dependencies.
 */

require('response-patch');
var http = require('http');
var path = require('path');
var connect = require('connect');
var urlrouter = require('urlrouter');
var wechat = require('wechat');
var render = require('connect-render');
var config = require('./config');
var routes = require('./routes');
var logger = require('./common/log');
var portal = require('./controllers/portal');

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
app.use('/portal', wechat(config.wechat.token,
                    wechat
                      .text(portal.text)
                      .event(portal.event)
                      .image(portal.image)));
app.use(render({
  root: path.join(__dirname, '/views'),
  layout: false,
  viewExt: '.html',
  cache: !config.debug,
  helpers: { 
    version: config.version,
    config: config
  }
}));
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
