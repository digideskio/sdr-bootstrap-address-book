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
                    <div className="col-md-8 col-md-push-4">
                        <div className="panel" style={{boxShadow: '0px 2px 5px 0px'}}>
                            <div className="panel-heading" style={{borderBottom: '1px solid black', backgroundColor: '#347bb7', color: 'white'}}>
                                <h3 className="panel-title text-center" >Chat...</h3>
                            </div>
                            <div className="panel-body">
                                <div className={styles['time-box']}>
                                    <TimeSwitcher />
                                </div>

                                
                                <div style={{padding:0}}>
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
                    <div className="col-md-4 col-md-pull-8">
                        <NameSwitcher />
                    </div>
                </div>
            </div>
        );
    }
}
