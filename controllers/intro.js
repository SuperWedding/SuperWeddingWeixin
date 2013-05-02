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
    picurl: config.serverHost + '/assets/img/bridegroom.png?v=' + config.version,
    url: config.serverHost + '/static/bridegroom'
  }]);
};

// 新娘介绍
exports.bride = function (message, req, res) {
  res.reply([{
    title: '漂亮的新娘：张茜',
    description: '点我查看新娘介绍',
    picurl: config.serverHost + '/assets/img/bride.png?v=' + config.version,
    url: config.serverHost + '/static/bride'
  }]);
};

var photosList = [
  '/assets/img/wedding/1.jpg',
  '/assets/img/wedding/2.jpg',
  '/assets/img/wedding/3.jpg',
  '/assets/img/wedding/4.jpg',
  '/assets/img/wedding/5.jpg',
  '/assets/img/wedding/6.jpg',
  '/assets/img/wedding/7.jpg',
  '/assets/img/wedding/8.jpg',
  '/assets/img/wedding/9.jpg',
  '/assets/img/wedding/10.jpg',
  '/assets/img/wedding/11.jpg',
  '/assets/img/wedding/12.jpg',
  '/assets/img/wedding/13.jpg',
  '/assets/img/wedding/14.jpg',
  '/assets/img/wedding/15.jpg',
  '/assets/img/wedding/16.jpg'
];

// 婚纱照
exports.photos = function (message, req, res) {
  var createTime = message.CreateTime || 0;
  var picUrl = photosList[createTime % photosList.length] + '?v=' + config.version;
  res.reply([{
    title: '新人婚纱照',
    description: '点我查看更多婚纱照',
    picurl: config.serverHost + picUrl,
    url: config.serverHost + '/static/photos'
  }]);
};
