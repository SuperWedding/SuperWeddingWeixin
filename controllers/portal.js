/*!
 * SuperWedding - controllers/portal.js
 */

"use strict";

/**
 * Module dependencies.
 */

var config = require('../config');
var customConfig = require('../config/custom');
var instructions = require('../common/instructions');
var promptPort = require('./portals/prompt');
var locationPort = require('./portals/location');
var seatPort = require('./portals/seat');
var introPort = require('./portals/intro');
var gossipPort = require('./portals/gossip');

// 事件
exports.event = function (message, req, res, next) {
  if (message.Event === 'subscribe') {
    return promptPort.help(message, req, res);
  }
  if (message.Event === 'unsubscribe') {
    return res.reply('Bye!');
  }
  res.reply('尚未支持！');
};

// 文字
exports.text = function (message, req, res, next) {
  var content = (message.Content || '').trim();
  // 先检查是否是查座位
  if (content[0] === '@') {
    return seatPort.handle(message, req, res);
  }
  // 查询新郎
  if (instructions.bridegroom.indexOf(content) >= 0 ||
      customConfig.bridegroom.indexOf(content) >= 0) {
    return introPort.bridegroom(message, req, res);
  }
  // 查询新娘
  if (instructions.bride.indexOf(content) >= 0 ||
      customConfig.bride.indexOf(content) >= 0) {
    return introPort.bride(message, req, res);
  }
  // 婚纱照
  if (instructions.photos.indexOf(content) >= 0) {
    return introPort.photos(message, req, res);
  }
  // 查询酒店地址
  if (instructions.location.indexOf(content) >= 0) {
    return locationPort.handle(message, req, res);
  }
  // 查询菜单
  if (instructions.menu.indexOf(content) >= 0) {
    return introPort.menu(message, req, res);
  }
  // 查询新人八卦
  if (instructions.gossip.indexOf(content) >= 0) {
    return gossipPort.handle(message, req, res);
  }
  // 默认显示帮助
  return promptPort.help(message, req, res);
};

exports.image = function (message, req, res, next) {
};
