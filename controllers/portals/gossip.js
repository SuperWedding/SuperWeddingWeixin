/*!
 * SuperWedding - controllers/portals/gossip.js
 */

"use strict";

/**
 * Module dependencies.
 */

var config = require('../../config');
var customConfig = require('../../config/custom');
var gossipList = customConfig.gossip;

exports.handle = function (message, req, res) {
  var createTime = message.CreateTime || 0;
  res.reply(gossipList[createTime % gossipList.length] + '\n（八卦很多，随机出的）');
};
