/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import ChatLoader from 'components/ChatLoader';
import TodoApp from 'containers/TodoApp';
import SerhiiComponent from 'containers/SerhiiContainer'
//import OlexiyComponent from 'containers/OlexiyComponent';
//import SerhiiComponent from 'containers/SerhiiComponent';
//import DimaComponent from 'containers/DimaComponent';

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
      const rowStyle = {
          textAlign: "center",
          border: "solid 2px black",
          borderRadius: "5px",
          backgroundColor: "#e2e2e2",
          margin: "1em"
      };

      const componentsDiv = {
          border: "solid 1px grey",
          borderRadius: "2px",
          backgroundColor: "#f2f2f2"

      };

    return (
        <div className="conteiner">
            <div className="row" style={rowStyle}>
                <h3>TodoApp</h3>
                <TodoApp />
            </div>
            <div className="row" style={rowStyle}>
                <h3> Separated Todos Components</h3>
                <div className="col-lg-4" style={componentsDiv}>
                    <h2>Serhii todos</h2>
                    <SerhiiComponent />
                </div>
                <div className="col-lg-4" style={componentsDiv}>
                    <h2>Olexiy todos</h2>
                    <h4>Place yours component here</h4>
                </div>
                <div className="col-lg-4" style={componentsDiv}>
                    <h2>Dima todos</h2>
                    <h4>Place yours component here</h4>
                </div>
            </div>
        </div>
    );
  }
}
