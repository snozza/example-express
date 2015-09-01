var React = require("react");
// Factory allows for the ComparisonContain() shorthand
var ComparisonContainer = React.createFactory(require("./comparisonContainer.jsx"));

React.render(
   ComparisonContainer({boxes: [1, 2, 3, 4]}),
   document.getElementById("comparison-container")
);

//Can use this JSX syntax if not using factory
//<ComparisonContainer boxes={[1, 2, 3, 4]} />,
