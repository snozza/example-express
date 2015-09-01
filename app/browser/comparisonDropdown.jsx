var React = require("react");

module.exports = ComparisonDropdown = React.createClass({displayName: "ComparisonDropdown",
  render:function() {
    return (
        <div>
          <p>{this.props.dropdownLabel}</p>
          <div className="DIV_8">
            <select>
              <option value="94">BBC Worldwide</option>
              <option value="95">BNATIRELND</option>
              <option value="86">BNATWALE</option>
            </select>
          </div>
        </div>
    );
  }
});

          
