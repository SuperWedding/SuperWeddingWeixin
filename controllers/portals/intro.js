/*!
 * SuperWedding - controllers/portals/intro.js
 */

"use strict";

/**
 * Module dependencies.
 */

var config = require('../../config');
var customConfig = require('../../config/custom');
var photosList = customConfig.photos;

// 新郎介绍
exports.bridegroom = function (message, req, res) {
  res.reply([{
    title: '帅气的新郎：' + customConfig.bridegroom[0],
    description: '查看新郎介绍',
    picurl: config.serverHost + '/assets/img/bridegroom.png?v=' + config.version,
    url: config.serverHost + '/static/bridegroom'
  }]);
};

// 新娘介绍
exports.bride = function (message, req, res) {
  res.reply([{
    title: '美丽的新娘：' + customConfig.bride[0],
    description: '查看新娘介绍',
    picurl: config.serverHost + '/assets/img/bride.png?v=' + config.version,
    url: config.serverHost + '/static/bride'
  }]);
};

// 婚纱照
exports.photos = function (message, req, res) {
  var createTime = message.CreateTime || 0;
  var picUrl = photosList[createTime % photosList.length] + '?v=' + config.version;
  res.reply([{
    title: '新人婚纱照',
    description: '查看更多婚纱照',
    picurl: config.serverHost + picUrl,
    url: config.serverHost + '/static/photos'
  }]);
};

// 菜单
exports.menu = function (message, req, res) {
  res.reply('菜单');
};
