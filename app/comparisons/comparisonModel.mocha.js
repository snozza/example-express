var User = require("./userModel");
var sinon = require("sinon");
var expect = require("chai").expect;

describe ("User Model", function() {
  it("User.findAllEmployees should return an array", function(done) {

    var employees = ["Ming Chan", "Andrew Snead"];

    sinon.stub(User, "find").yields(null, employees);

    User.findAllEmployees(function(error, result) {
      expect(error).to.not.be.true;
      expect(Array.isArray(result)).to.be.ok;
      done();
    });
  });
});
