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
import GetAndPost from '../../components/GetAndPost';
import PostForm from 'containers/PostForm';
import styles from './styles.css';

import ModalWindow from 'components/ModalWindow';

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
            <div className={styles.block}>
                <ChatLoader />
            </div>
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <PostForm />
                    <h1>{this.props.params.user}</h1>
                </div>
            </div>
            <div className="row center">
                <div style={{textAlign:"center"}}>
                    <button
                        className="btn btn-danger"
                        onClick={() => {
                            if (this.modalWindow.state.isOpen) {
                                this.modalWindow.close()
                            } else {
                                this.modalWindow.open()
                            }
                        }}
                    >
                    Show modal window
                    </button>
                </div>
            </div>
            <ModalWindow
                isOpen= { false }
                ref={ me => this.modalWindow = me }
            />
        </div>
    );
  }
}
