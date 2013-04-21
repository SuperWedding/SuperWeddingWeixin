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
  '新郎在认识新娘之前是第三次谈恋爱噢~',
  '新娘在认识新郎之前是第几次谈恋爱我也搞不清啊！',
  '我只是来测试的，不要策我！',
  '呵呵呵，实在没啥好说的。'
];

exports.handle = function (message, req, res) {
  var createTime = message.CreateTime || 0;
  res.reply(list[createTime % list.length] + "\n难道我会告诉你八卦是随机出的，多次问我我会说不同的八卦吗！");
};
