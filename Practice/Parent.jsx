import React from "react";
import { render } from "react-dom";

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

class Parent extends React.Component {
  
  state = {
    name: 'Mark'

  }

  componentDidMount() {
    setTimeout(() => {
      console.log('Directly modified state: /');
      this.state.name = 'bob';
    }, 2000);
  }

  render () {
    return (
      <div>
        this.state.name = {this.state.name}
      </div>
    );
  }
}

render(
  <Parent/>,
  document.getElementById('root');
);
