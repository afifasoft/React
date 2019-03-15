const node = document.getElementById("root");


// ReactDOM.render looks like this
ReactDOM.render(
  ReactElement element,
  DOMElement container,
  [function callback]
) -> ReactComponent


React.createElement(
  String/ReactClass type,
  [object props],
  [children...]
) -> React Element



// Using React.createElement

import  React, { Component } from 'react';
import { render } 'react-dom';

const node = document.getElementById('root');
const root =
    React.createElement('div', {}, //
      React.createElement('h1', {}, "Hello, World", //
      React.createElement('a', {href: 'mailto:mark@ifelse.io'},
      React.createElement('h1', {}, "React In Action"),
      React.createElement('em', {}, "...and now it really is!")
      )
    )
  );

  render(root, node); //
