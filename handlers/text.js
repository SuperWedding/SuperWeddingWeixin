/*!
 * SuperWedding - handlers/text.js
 */

"use strict";

/**
 * Module dependencies.
 */

var config = require('../config');
var instructions = require('../common/instructions');
var promptCtrl = require('../controllers/prompt');
var locationCtrl = require('../controllers/location');
var seatCtrl = require('../controllers/seat');

module.exports = function (message, req, res, next) {
  var content = (message.Content || '').trim();
  // 先检查是否是查座位
  if (content[0] === '@') {
    return seatCtrl.handle(req, res);
  }
  // 查询酒店地址
  if (instructions.location.indexOf(content) >= 0) {
    return locationCtrl.handle(req, res);
  }
  // 查询新人八卦
  if (instructions.gossip.indexOf(content) >= 0) {

  }
  // 默认显示帮助
  return promptCtrl.help(req, res);
};