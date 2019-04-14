import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

class ChildComponent extends Component {
    static propTypes = {
      name: PropTypes.string
    };

    static defaultProps = (function () {
        console.log('ChildComponent : defaultProps');
        return {};
    })();


    constructor(props) {
      super(props);
      console.log('ChildComponent: state');
    }

    render () {
      console.log('ChildComponent: render');
      return (
        <div>
          Name:
        </div>
      );
    }
};


render(
  <ChildComponent />,
  document.getElementById('container')
);
