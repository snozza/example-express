#!/usr/bin/env node

var errors = require("./errors/errors");
process.on("uncaughtException", errors.onUncaughtException);

var app = require("./index");
var config = require("./config");
var mongoose = require("mongoose");
var log = require('./log');

log.info("server process starting");

function gracefulShutdown() {
  log.info("server shutting down gracefully due to kill signal");
  if (!server) { 
    process.exit();
  }
  server.close(function() {
    log.debug("server connections gracefully closed. Exiting");
    process.exit();
  });

  setTimeout(function() {
    log.debug("server exiting abruptly. Connections did not complete quickly.");
    process.exit();
  }, 10 * 1000);
}
process.on("SIGTERM", gracefulShutdown);

var db = mongoose.connection;

function DBConnect() {
  mongoose.connect(config.dbURL);
}

db.on("error", function(error) {
  console.error(console, 'connection error: ');
  db.disconnect();
});

db.once("open", function(callback) {
  log.info("connected to: " + config.dbURL);
});

DBConnect();

app.listen(config.express.port, config.express.ip, function (error) {
  if (error) {
    log.error("Unable to listen for connections", error);
    process.exit(10);
  }
  log.info("express is listening on http://" +
    config.express.ip + ":" + config.express.port);
});
