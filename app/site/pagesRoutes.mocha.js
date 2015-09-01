var app = require("../testApp");
var expect = require("chai").expect;

describe ("Main Site", function() {

  it("app/site/router should serve the favicon", function(done) {
    app.get("/favicon.ico")
      .expect(200)
      .expect("Content-Type", /^image/)
      .end(done);
  });

  it("app/site/router should serve the home page", function(done) {
    app.get("/")
      .expect(200)
      .expect("Content-Type", "text/html; charset=utf-8")
      .end(done);
  });

});
