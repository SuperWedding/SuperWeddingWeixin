/*!
 * SuperWedding - controllers/portals/prompt.js
 */

"use strict";

/**
 * Module dependencies.
 */

var config = require('../../config');
var customConfig = require('../../config/custom');

exports.help = function (message, req, res) {
  res.reply([{
    title: '欢迎参加' + customConfig.titleplain,
    description: customConfig.title + '微信助手使用帮助',
    picurl: config.serverHost + '/assets/img/welcome.jpg?v=' + config.version,
    url: config.serverHost + '/static/help'
  }]);
};
