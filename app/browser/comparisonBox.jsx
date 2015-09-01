var React = require("react");
var ComparisonCSRSearch = require("./comparisonCSRSearch.jsx");
var ComparisonDropdown = require("./comparisonDropdown.jsx");
var ComparisonButton = require("./comparisonButton.jsx");

module.exports = ComparisonBox = React.createClass({displayName: "ComparisonBox",
  render: function() {
    var firstDropdown = "Choose a division";
    var secondDropdown = "Choose a time period";
    return (
        <div className="box">
          <ComparisonCSRSearch />
          <ComparisonDropdown dropdownLabel={firstDropdown} />
          <ComparisonDropdown dropdownLabel={secondDropdown} />
          <ComparisonButton />
        </div>
    );
  }
});
