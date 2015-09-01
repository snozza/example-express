var React = require("react");
var EmployeeRow = require("./employeeRow.jsx");

module.exports = EmployeeList = React.createClass({displayName: "EmployeeList",
  render: function() {
    var rows = [];
    this.props.employees.forEach(function(employee) {
      rows.push(React.createElement(EmployeeRow, {employee: employee, key: employee._id}));
    }.bind(this));
    return (
        <table style={{borderSpacing: "10px"}}> 
          <thead> 
              <tr> 
                  <th style={{fontWeight: "bold"}}>Name</th> 
                  <th style={{fontWeight: "bold"}}>Role</th> 
              </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
    );
  }
});

