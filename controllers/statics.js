/*!
 * SuperWedding - controllers/statics.js
 */

"use strict";

/**
 * Module dependencies.
 */


exports.help = function (req, res, next) {
  return res.render('help');
};

exports.location = function (req, res, next) {
  return res.render('location');
};

exports.bridegroom = function (req, res, next) {
  return res.render('bridegroom');
};

exports.bride = function (req, res, next) {
  return res.render('bride');
};

exports.photos = function (req, res, next) {
  return res.render('photos');
};
