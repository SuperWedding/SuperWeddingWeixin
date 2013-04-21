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

module.exports = function (message, req, res, next) {
  var content = (message.Content || '').trim();
  if (instructions.location.indexOf(content) >= 0) {
    return locationCtrl.handle(req, res);
  }
  if (instructions.gossip.indexOf(content) >= 0) {

  }
  if (instructions.seat.indexOf(content) >= 0) {

  }
  return promptCtrl.help(req, res);
};