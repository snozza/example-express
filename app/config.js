var config = module.exports;
var currentENV = process.env.NODE_ENV || "development";
var PRODUCTION = process.env.NODE_ENV === "production";
var TEST = process.env.NODE_ENV === "test";

config.express = {
  port: process.env.EXPRESS_PORT || 3000,
  ip: "127.0.0.1"
};

config.mongodb = {
  port: process.env.MONGODB_PORT || 27017,
  host: process.env.MONGODB_HOST || "localhost",
  db: process.env.MONGODB_DATABASE || "easyJet"
};

if (PRODUCTION) {
  config.express.ip = "0.0.0.0";
  config.express.port = "80";
}

if (TEST) {
  config.express.PORT = 4567;
}

config.dbURL = "mongodb://" + config.mongodb.host + ":" + config.mongodb.port +
  "/" + config.mongodb.db + "_" + currentENV;

config.currentENV = currentENV;
//config.db same deal
//config.email etc
//config.log
