var express = require("express");
var join = require("path").join;
var User = require("../users/userModel");
var needUser = require("../middleware").needUser;
var router = require("express").Router();
var React = require('react');
var employeeList = React.createFactory(require('../browser/employeeList'));

function getComparisons(req, res, next) {
  User.findAllEmployees(function (err, employees) {
    if (err) {
      return next(err)
    }
    var markup = React.renderToString(
        employeeList({employees: employees})
        
    );

    res.render("comparisons/comparisons", {
      markup: markup,
      employees: JSON.stringify(employees)
    });
  });
}

router.use(express.static(join(__dirname, "../../wwwroot")));
router.get("/comparisons/comparisons", getComparisons);

module.exports = router;
