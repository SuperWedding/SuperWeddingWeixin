/*!
 * SuperWedding - config/custom.js
 */

"use strict";

var customConfig = {
  // 婚礼标题
  title: '闻啸&张茜婚礼',
  // 婚礼标题（无特殊符号）
  titleplain: '闻啸张茜婚礼',
  // 新郎
  bridegroom: ['闻啸', '宁朗', '二师兄'],
  // 新娘
  bride: ['张茜', '小仙仙', 'Claire', '小可', '酱酱'],
  // 婚宴地点
  location: {
    title: '江干区钱潮路天元大厦'
  },
  // 座位表
  seatings: require('./seatings') || [],
  // 婚纱照
  photos: [
    '/assets/img/wedding/1.jpg',
    '/assets/img/wedding/2.jpg',
    '/assets/img/wedding/3.jpg',
    '/assets/img/wedding/4.jpg',
    '/assets/img/wedding/5.jpg',
    '/assets/img/wedding/6.jpg',
    '/assets/img/wedding/7.jpg',
    '/assets/img/wedding/8.jpg',
    '/assets/img/wedding/9.jpg',
    '/assets/img/wedding/10.jpg',
    '/assets/img/wedding/11.jpg',
    '/assets/img/wedding/12.jpg',
    '/assets/img/wedding/13.jpg',
    '/assets/img/wedding/14.jpg',
    '/assets/img/wedding/15.jpg',
    '/assets/img/wedding/16.jpg'
  ],
  // 八卦
  gossip: require('./gossip') || [],

};

module.exports = customConfig;
