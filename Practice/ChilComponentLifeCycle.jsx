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

    this.oops = this.oops.bind(this);

  }

  componentWillUnmount() {
    console.log('ChildComponentLifeCycle: componentWillUnmount');
  }

  componentWillMount() {
    console.log('ChildComponentLifeCycle: componentWillMount');
  }

  componentDidMount() {
    console.log('ChildComponentLifeCycle: componentDidMount');
  }

  componentWillReceiveProps(nextProps) {

    console.log('ChildComponentLifeCycle : componentWillReceiveProps()');
    console.log('nextProps: ', nextProps);

  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('<ChildComponentLifeCycle> - shouldComponentUpdate()');
    console.log('nextProps: ', nextProps);
    console.log('nextState: ', nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {

    console.log('<ChildComponentLifeCycle> : componentWillUpdate');
    console.log('nextProps: ', nextProps);
    console.log('nextState: ', nextState);

  }

  componentDidUpdate(previousProps, previousState) {
    console.log('ChildComponentLifeCycle: ', componentDidUpdate);
    console.log('previousProps: ', previousProps);
    console.log('previousState');

  }

  oops() {
    this.setState(() => ({ oops: true}));
  }

  render () {
    if(this.state.oops) {
      throw new Error('Something went wrong');
    }
    console.log('ChildComponentLifeCycle: render');

    return [
      <div key="name">Name:{this.props.name}</div>,
      <button key="error" onClick={this.oops}>
        Create error
      </button>
    ];

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

  componentWillUnmount() {
    console.log('ParentComponent: componentWillUnmount');
  }

  onInputChange(e) {
    const text = e.target.value;
    this.setState(() => ({
      text: text
    }));
  }

  componentDidCatch(err, errorInfo) {
    console.log('componentDidCatch');
    console.error(err);
    console.error(errorInfo);
    this.setState(() => ({ err, errorInfo}));
  }

  render () {
    console.log('ParentComponent: render');
    if (this.state.err) {
      return  (
        <details style={{ whiteSpace: 'pre-wrap'}}>
          {this.state.error && this.state.error.toString()}
          <br/>
          {this.state.errorInfo.componentStack}
        </details>
      );
    }
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
