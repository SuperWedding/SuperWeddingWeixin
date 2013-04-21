/*!
 * SuperWedding - routes.js
 */

"use strict";

/**
 * Module dependencies.
 */

var wechat = require('wechat');
var config = require('./config');
var textHandler = require('./handlers/text');

module.exports = function (app) {
  app.post('/portal', wechat(config.wechat.token)
    .text(textHandler));
};
