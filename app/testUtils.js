var mongoose = require('mongoose');
var config = require('./config');

function mongooseSetup() {
  before(function(done) {
    if (mongoose.connection.db) return done();
    mongoose.connect(config.dbURL, done);
  });

  before(function(done) {
    mongoose.connection.db.dropDatabase(done);
  });
    
  afterEach(function(done) {
    mongoose.connection.db.dropDatabase(done);
  });
}

module.exports = mongooseSetup;
