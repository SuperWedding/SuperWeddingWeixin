/*!
 * SuperWedding - handlers/image.js
 */

"use strict";

/**
 * Module dependencies.
 */

var config = require('../config');

module.exports = function (message, req, res, next) {
  var picUrl = message.PicUrl || '';
  console.log(picUrl);
};