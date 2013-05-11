/*!
 * SuperWedding - controllers/portals/location.js
 */

"use strict";

/**
 * Module dependencies.
 */

var config = require('../../config');
var customConfig = require('../../config/custom');
var locationConfig = customConfig.location;

exports.handle = function (message, req, res) {
  res.reply([{
    title: locationConfig.title,
    description: '查看酒店详细地址和驾车路线',
    picurl: config.serverHost + '/assets/img/location.png?v=' + config.version,
    url: config.serverHost + '/static/location'
  }]);
};
