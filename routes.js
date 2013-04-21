/*!
 * SuperWedding - routes.js
 */

"use strict";

/**
 * Module dependencies.
 */

module.exports = function (app) {
  app.get('/static/help', function (req, res, next) {
    return res.render('help');
  });
  app.get('/static/location', function (req, res, next) {
    return res.render('location');
  });
};
