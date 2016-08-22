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
import classNames from 'classnames/bind';

let homePageStyles = classNames.bind(styles);

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

    render() {
        const containerStyle = homePageStyles({
            'container':true,
            'container-table':true
        });
        const rowStyle = homePageStyles({
            'row': true,
            'row-table':true
        });
        const columnStyle = homePageStyles({
            'col-md-8 col-md-offset-2': true,
            'col-table':true
        });

        return (
            <div className={containerStyle}>
                <div className={rowStyle}>
                    <div className={columnStyle}>
                        <div className={styles['chat-box']}>
                            <ChatLoader />
                        </div>
                        <div className={styles['post-box']}>
                            <PostForm />
                        </div>
                    {/* <h1>{this.props.params.user}</h1> */}
                </div>
            </div>
        </div>
    );
  }
}
