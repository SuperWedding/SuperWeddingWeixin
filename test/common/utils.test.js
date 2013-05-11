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

  describe('getMemberName()', function () {
    it('should @+「巴思」=> 巴思', function () {
      utils.getMemberName('@+「巴思」').should.equal('巴思');
    });
  });

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

  describe('formatMembers()', function () {
    it('should have return when no input', function () {
      utils.formatMembers().should.eql('');
    });
    it('should have return when input is not array', function () {
      utils.formatMembers('hehe').should.eql('');
    });
    it('should format members array', function () {
      var input = [['贾超', '玄澄', '导演', '大叔'], ['戴汶倬', '巴思'], '谢霆锋'];
      utils.formatMembers(input).should.eql('贾超、戴汶倬、谢霆锋');
    });
  });
});