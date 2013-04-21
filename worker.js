/*!
 * SuperWedding - worker.js
 */

"use strict";

/**
 * Module dependencies.
 */

var config = require('./config');
var app = require('./app');
app.listen(config.port);