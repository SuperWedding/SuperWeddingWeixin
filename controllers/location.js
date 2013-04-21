/*!
 * SuperWedding - controllers/location.js
 */

"use strict";

/**
 * Module dependencies.
 */

var config = require('../config');
var logger = require('../common/log');

exports.handle = function (req, res) {
  res.reply([{
    title: '江干区钱潮路天元大厦',
    description: '点我查看更酒店详细地址和驾车路线',
    picurl: config.serverHost + '/assets/img/location.png',
    url: config.serverHost + '/static/location'
  }]);
};
