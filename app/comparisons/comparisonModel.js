var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  firstname:          {type: String},
  lastname:           {type: String},
  username:           {type: String, required: true, index: {unique: true}},
  password:           {type: String, required: true},
  userType:           {type: String, requred: true},
  jobRole:            {
                        role: {type: String},
                        cover: [{type: String}]
                      }     
});

UserSchema.statics.findAllEmployees = function(callback) {
  this.find({userType: "employee"}, function(err, employees) {
    if (err) { 
      return callback(err) 
    }
    return callback(null, employees);
  });
};

var User = mongoose.model('User', UserSchema);

module.exports = User;



