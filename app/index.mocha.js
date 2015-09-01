var app = require("./testApp");
var expect = require("chai").expect;

describe("Parent routes", function() {

  it("the express app should serve the favicon", function(done) {
    app.get("/favicon.ico")
      .expect(200)
      .expect("Content-Type", /^image/)
      .end(done);
  });

  it("the express app should 404 properly", function(done) {
    app.get("/this-path-not-found").expect(404).end(done);
  });
});
