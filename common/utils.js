/*!
 * SuperWedding - common/utils.js
 */

"use strict";

/**
 * Module dependencies.
 */

var util = require('util');

exports.flatten = function (input) {
  if (!input || !util.isArray(input)) {
    return [];
  }
  var output = [];
  for (var i = 0, l = input.length; i < l; i++) {
    var value = input[i];
    if (util.isArray(value)) {
      output = output.concat(exports.flatten(value));
    } else {
      output.push(value);
    }
  }
  return output;
};

exports.formatMembers = function (input) {
  if (!input || !util.isArray(input)) {
    return '';
  }
  var output = [];
  for (var i = 0, l = input.length; i < l; i++) {
    var value = input[i];
    if (util.isArray(value)) {
      if (value.length === 1) {
        output.push(value[0]);
      } else {
        output.push(value[0] + '(' + (value.slice(1) || []).join('/') + ')');
      }
    } else {
      output.push(value);
    }
  }
  return output.join('、');
};