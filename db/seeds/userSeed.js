var mongoose = require("mongoose");
var config = require ("../../app/config");
var User = require ("../../app/users/userModel");
var async = require("async");
var users = require("./users");

function setupDB(callback) {
  mongoose.connect(config.dbURL, function(err) {
    if (err) {
      return callback(err);
    }
    mongoose.connection.db.dropDatabase(function(err) {
      if (err) { 
        return callback(err);
      }
      callback();
    });
  });
}

function createUser(user, callback) {
  User.create(user, function(err, result) {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
}


function createAllUsers(callback) {
  async.each(users, createUser, function(err) {
    if (err) {
      return callback(err);
    }
    callback();
  });
}

function startSeed() {
  var procedure = [
    async.apply(setupDB),
    async.apply(createAllUsers)
  ];
  async.series(procedure, function(err) {
    mongoose.connection.db.close();
    if (err) {
      console.log(err);
      process.exit(1);
    } else {
      console.log("Success. All Users Created!");
      process.exit(0);
    }
  });
}

module.exports = {
  startSeed: startSeed
}
  
