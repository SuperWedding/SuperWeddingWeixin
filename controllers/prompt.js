/*!
 * SuperWedding - controllers/prompt.js
 */

"use strict";

/**
 * Module dependencies.
 */

var config = require('../config');
var logger = require('../common/log');

exports.help = function (req, res) {
  res.reply([{
    title: '欢迎参加闻啸张茜婚礼',
    description: '闻啸&张茜婚礼微信助手使用帮助',
    picurl: config.serverHost + '/assets/img/help.png?v=' + config.version,
    url: config.serverHost + '/static/help'
  }]);
};
