/*!
 * SuperWedding - controllers/seat.js
 */

"use strict";

/**
 * Module dependencies.
 */

var config = require('../config');
var logger = require('../common/log');
var utils = require('../common/utils');

var seats = [
  {
    desc: '第1桌',
    members: [['袁锋', '苏千'], ['贾超', '玄澄'], ['肖潇', '米谜'], ['戴汶倬', '巴思']]
  },
  {
    desc: '第2桌',
    members: ['谢霆锋', '张学友', '陈冠希', '刘德华', '古天乐', '戴汶倬']
  }
];

exports.handle = function (message, req, res) {
  var content = (message.Content || '').trim();
  var name = (content.substring(1)).split(' ')[0];
  var found = [];
  for (var i = 0, l = seats.length; i < l; i++) {
    var members = utils.flatten(seats[i].members);
    if (members.indexOf(name) >= 0) {
      found.push(seats[i]);
    }
  }
  if (found.length === 0) {
    res.reply('抱歉，没有找到「' + name + '」的座位，请确认输入是否正确。');
    return;
  }
  if (found.length === 1) {
    res.reply('「' + name + '」的座位在' + found[0].desc + '，同桌的亲友有：' + found[0].members.join('、') + '。');
    return;
  }
  var text = [];
  for (var i = 0, l = found.length; i < l; i++) {
    text.push(found[i].desc + '，同桌的亲友有：' + found[i].members);
  }
  text = text.join('；');
  res.reply('找到' + found.length + '位叫「' + name + '」的宾客，分别为' + text);
};
