/*!
 * SuperWedding - controllers/gossip.js
 */

"use strict";

/**
 * Module dependencies.
 */

var config = require('../config');
var logger = require('../common/log');

var list = [
  '新郎认识新娘是第三次谈恋爱噢~',
  '新娘认识新郎是第一次谈恋爱！亏大发了！',
  '我只是来测试的，不要策我！',
  '呵呵呵，实在没啥好说的。'
];

exports.handle = function (message, req, res) {
  var createTime = message.CreateTime || 0;
  res.reply(list[createTime % list.length] + "\n（八卦很多，随机出的）");
};
