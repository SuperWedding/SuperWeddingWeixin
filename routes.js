/*!
 * SuperWedding - routes.js
 */

"use strict";

/**
 * Module dependencies.
 */

var staticsCtrl = require('./controllers/statics');

module.exports = function (app) {
  app.get('/static/help', staticsCtrl.help);
  app.get('/static/location', staticsCtrl.location);
  app.get('/static/bridegroom', staticsCtrl.bridegroom);
  app.get('/static/bride', staticsCtrl.bride);
  app.get('/static/photos', staticsCtrl.photos);
};
