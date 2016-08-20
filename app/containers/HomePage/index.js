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
import ChatLoader from 'containers/ChatLoader';
import DimaComponent from 'containers/DimaComponent';
import SerhiiComponent from 'containers/SerhiiContainer';
import GetAndPost from '../../components/GetAndPost';
import PostForm from 'containers/PostForm'

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
          backgroundColor: "#f2f2f2",
          padding: "0.5em"

      };

    return (
        <div className="conteiner">
            <ChatLoader />
            <PostForm />
        </div>
    );
  }
}
