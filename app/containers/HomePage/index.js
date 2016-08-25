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

import ModalWindow from 'components/ModalWindow';
import NameSwitcher from 'containers/NameSwitcher';
import TimeSwitcher from 'containers/TimeSwitcher';

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-4 col-xs-4">
                        <NameSwitcher />
                    </div>

                    <div className="col-lg-9 col-md-9 col-sm-8 col-xs-8">
                        <div className={styles["chatLoaderHeader"]}>
                            <h4>Chat...</h4>
                        </div>
                        <div style={{border:"solid white 2px", padding:"0.5em 1em"}}>
                            <div className={styles['time-box']}>
                                <TimeSwitcher />
                            </div>
                            <div className={styles['chat-box']}>
                                <ChatLoader />
                            </div>
                        </div>
                        <div className={styles['post-box']}>
                            <PostForm />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
