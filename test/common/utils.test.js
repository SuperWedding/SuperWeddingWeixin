/*!
 * SuperWedding - test/common/utils.test.js
 */

"use strict";

/**
 * Module dependencies.
 */

var should = require('should');
var utils = require('../../common/utils');

describe('common/utils.test.js', function () {

  describe('flatten()', function () {
    it('should have return when no input', function () {
      utils.flatten().length.should.eql(0);
    });
    it('should have return when input is not array', function () {
      utils.flatten('hehe').length.should.eql(0);
    });
    it('should flatten array', function () {
      utils.flatten(['a', 'b', ['c', 'd', ['e', 'f', 'g']]]).should.eql(['a', 'b', 'c', 'd', 'e', 'f', 'g']);
    });
  });
});