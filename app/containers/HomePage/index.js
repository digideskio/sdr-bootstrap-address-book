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
        const containerStyle = homePageStyles({
            'container':true,
            'container-table':true
        });
        const rowStyle = homePageStyles({
            'row': true,
            'row-table':true
        });
        const columnStyle = homePageStyles({
            'col-md-8': true,
            'col-table':true
        });
        const columnStyleSwitcher = homePageStyles({
            'col-md-4': true,
            'col-table':true
        });


        return (
            <div className={containerStyle} >
                <div className={rowStyle}>
                    <div className={columnStyleSwitcher} style={{paddingLeft:"2em"}}>
                        <NameSwitcher />
                    </div>
                    <div className={columnStyle}>
                        <div className={styles['time-box']}>
                        <TimeSwitcher />
                        </div>
                        <div className={styles['chat-box']}>
                            <ChatLoader />
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
