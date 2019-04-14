import React from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";


function Greeting (props) {

  return <div> Hello {props.for}!</div>;

}

Greeting.propTypes = {

  for: PropTypes.string.isRequired;

};


Greeting.defaultProps = {
  for: 'friend'
};

render(<Greeting for="Mark" />, mountNode);


// Or using an arrow function
// const Greeting = (props) => <div>Hello {props.for}</div>;
// ... specify props and default props same as before
// render(<Greeting name="Mark" />, document.getElementById("root"));
