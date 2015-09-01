var express = require("express");
var join = require("path").join;
var User = require("./userModel");
var needUser = require("../middleware").needUser;
var router = require("express").Router();
var React = require('react');
var employeeList = React.createFactory(require('../browser/employeeList'));

function getEmployees(req, res, next) {
  User.findAllEmployees(function (err, employees) {
    if (err) {
      return next(err)
    }
    var markup = React.renderToString(
        employeeList({employees: employees})
        
    );

    res.render("users/employees", {
      markup: markup,
      employees: JSON.stringify(employees)
    });
  });
}

function createUser(req, res, next) {
  res.status(201).send();
}

function signIn(req, res, next) {
  res.status(200).send();
}

router.use(express.static(join(__dirname, "../../wwwroot")));
router.post("/users", createUser );
router.get("/users/employees", getEmployees);
router.post("/users/sign-in", needUser, signIn);
router.get("/users/profile", needUser);

module.exports = router;
