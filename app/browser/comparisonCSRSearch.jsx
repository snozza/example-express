React = require('react');

module.exports = ComparisonCSRSearch = React.createClass({displayName: "ComparisonCSRSearch",
  render: function() {
    return (
        <div>
          <p>Choose a CSR</p>
            <input placeholder="CSR" type="text"/>
        </div>
    );
  }
});
