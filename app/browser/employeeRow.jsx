React = require('react');

module.exports = EmployeeRow = React.createClass({displayName: "EmployeeRow",
  render: function() {
    var firstname = this.props.employee.firstname;
    var lastname = this.props.employee.lastname;
    var role = this.props.employee.jobRole.role;
    return (
        <tr>
          <td>{firstname + " " + lastname}</td>
          <td>{role}</td>
        </tr>
    );
  }
});

