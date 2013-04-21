/*!
 * SuperWedding - controllers/intro.js
 */

"use strict";

/**
 * Module dependencies.
 */

var config = require('../config');
var logger = require('../common/log');

// 新郎介绍
exports.bridegroom = function (message, req, res) {
  res.reply([{
    title: '帅气的新郎：闻啸',
    description: '点我查看新郎介绍',
    picurl: config.serverHost + '/assets/img/bridegroom.png',
    url: config.serverHost + '/static/bridegroom'
  }]);
};

// 新娘介绍
exports.bride = function (message, req, res) {
  res.reply([{
    title: '漂亮的新娘：张茜',
    description: '点我查看新娘介绍',
    picurl: config.serverHost + '/assets/img/bride.png',
    url: config.serverHost + '/static/bride'
  }]);
};
