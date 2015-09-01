var React = require("react");
var employeeList = React.createFactory(require("./employeeList.jsx"));

var initialState = JSON.parse(document.getElementById("initial-state").innerHTML);

React.render(
   employeeList({employees: initialState}),
   document.getElementById("content")
);
     
