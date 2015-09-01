var app = require("../testApp");
var chai = require("chai").expect;
var dbConnect = require("../testUtils");

describe("User routes", function() {
  
  dbConnect();

  it("GET /api/users/employees should return rendered page", function(done) {
    app.get("/api/users/employees")
      .expect(200)
      .expect("Content-Type", "text/html; charset=utf-8")
      .end(done);
  });

  it("POST /api/employees should send 201", function(done) {
    app.post("/api/employees")
      .send({name: "Barbara Doe"})
      .expect(201)
      .end(done);
  });
});
