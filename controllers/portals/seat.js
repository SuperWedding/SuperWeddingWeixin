/*!
 * SuperWedding - controllers/portals/seat.js
 */

"use strict";

/**
 * Module dependencies.
 */

var config = require('../../config');
var customConfig = require('../../config/custom');
var seatings = customConfig.seatings;
var utils = require('../../common/utils');

exports.handle = function (message, req, res) {
  var content = (message.Content || '').trim();
  var name = utils.getMemberName(content);
  var found = [];
  for (var i = 0, l = seatings.length; i < l; i++) {
    var members = utils.flatten(seatings[i].members);
    if (members.indexOf(name) >= 0) {
      found.push(seatings[i]);
    }
  }
  if (found.length === 0) {
    res.reply('抱歉，没有找到「' + name + '」的座位，请确认输入是否正确。');
    return;
  }
  if (found.length === 1) {
    res.reply('「' + name + '」的座位在' + found[0].desc + '：' + utils.formatMembers(found[0].members) + '。');
    return;
  }
  var text = [];
  for (var i = 0, l = found.length; i < l; i++) {
    text.push(found[i].desc + '：' + utils.formatMembers(found[i].members));
  }
  text = text.join('；');
  res.reply('找到' + found.length + '位叫「' + name + '」的宾客。分别为' + text + '。');
};
