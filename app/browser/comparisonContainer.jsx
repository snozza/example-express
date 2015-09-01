var React = require("react");
var ComparisonBox = require("./comparisonBox.jsx");

module.exports = ComparisonContainer = React.createClass({displayName: "ComparisonContainer",
  render: function() {
    var comparisonBoxes = this.props.boxes.map(function (box) {
      return (
          <ComparisonBox />
      );
    });
    return (
        <section className="comparison-container">
          {comparisonBoxes}
        </section>
    );
  }
});
