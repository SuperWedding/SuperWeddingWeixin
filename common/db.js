/*!
 * SuperWedding - common/db.js
 */

"use strict";

/**
 * Module dependencies.
 */

var easymysql = require('easymysql');
var config = require('../config').mysql;

var client = easymysql.create({ maxconnection: config.maxConnection });

client.on('error', function (err) {
  console.error(err);
});

for (var i = 0; i < config.servers.length; i++) {
  client.addserver(config.servers[i]);
}

client.queryOne = function (sql, callback) {
  client.query(sql, function (err, rows) {
    if (err) {
      return callback(err);
    }
    var row = null;
    if (rows && rows.length) {
      row = rows[0];
    }
    callback(null, row);
  });
};

module.exports = client;