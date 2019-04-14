import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { render } from 'react-dom';

class ChildComponentLifeCycle extends Component {

  static propTypes = {
    name: PropTypes.string
  };

  static defaultProps = (function() {
    console.log('ChildComponentLifeCycle: defaultProps');
    return {};
  })();

  constructor (props) {
    super(props);
    console.log('ChildComponentLifeCycle: state');
    this.state = {
      name: 'Mark'
    };

  }


  componentWillMount() {
    console.log('ChildComponentLifeCycle: componentWillMount');
  }

  componentDidMount() {
    console.log('ChildComponentLifeCycle: componentDidMount');
  }

  render () {
    if(this.state.oops) {
      throw new Error('Something went wrong');
    }
    console.log('ChildComponentLifeCycle: render');

    return (
      <div key="name">Name:{this.props.name}</div>
    );

  }
}


class ParentComponent extends Component {
    static defaultProps = (function () {
      console.log('ParentComponent: defaultProps');
      return  {
        true: false
      };
    })();

  constructor(props) {
    super(props);
    console.log('ParentComponent: state');
    this.state = {
      text: '',

    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  componentWillMount() {
    console.log('ParentComponent: componentWillMount');
  }

  componentDidMount() {
    console.log('ParentComponent: componentDidMount');
  }

  onInputChange(e) {
    const text = e.target.value;
    this.setState(() => ({
      text: text
    }));
  }

  render () {
    console.log('ParentComponent: render');

    return [
      <h2 key="h2">Learn about rendering and lifecycle method</h2>,
      <input key="input" value={this.state.text} onChange={this.onInputChange}/>,
      <ChildComponentLifeCycle key="ChildComponentLifeCycle" name={this.state.text}/>
    ];
  }
}

render(
  <ParentComponent />,
  document.getElementById('root')
 );
