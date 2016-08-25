import React, { Component, PropTypes } from 'react';
import Input from 'components/Input';
import classNames from 'classnames/bind';
import styles from './styles.css';


let commentFormStyles = classNames.bind(styles);

export default class CommentForm extends Component {
    //Change current author
    componentWillReceiveProps = (nextProps) => {
        const { changeCurrentPostAction, currentAuthor } = this.props;
        if (nextProps.currentAuthor !== currentAuthor) {
            changeCurrentPostAction(nextProps.currentAuthor, '');
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const { changeCurrentPostAction, sendPostAction } = this.props;
        const author = this.inputForAuthor.getValue().trim();
        const text = this.inputForText.getValue().trim();
        if (!text || !author) {
          return;
        }
        //Change currentPost before send post action
        changeCurrentPostAction(author, text);
        //Send post to server
        sendPostAction();
    };

    render() {
        const {currentPost} = this.props;
        const spanStyle = commentFormStyles({
            'span-colors':true,
            'input-group-addon':true,
            'border': "solid white 1px"
        });


        return (
            <form
                className="commentForm"
                onSubmit={this.handleSubmit}>
                <div className="input-group">
                    <Input
                        ref={me => this.inputForAuthor = me}
                        placeholder="Yor name"
                        type="text"
                        value={currentPost.author}
                        className="form-control"
                    />
                    <span className={spanStyle}>&</span>
                    <Input
                        ref={me => this.inputForText = me}
                        placeholder="Say something..."
                        type="text"
                        value={currentPost.text}
                        className="form-control"
                    />
                    <span className={spanStyle}>
                        <Input
                            type="submit"
                            value="Post"
                        />
                    </span>
                </div>
            </form>
        );
    }
}

CommentForm.propTypes = {
    currentPost: PropTypes.object.isRequired,
    currentAuthor: PropTypes.string.isRequired,
    changeCurrentPostAction: PropTypes.func.isRequired,
    sendPostAction: PropTypes.func.isRequired,
}
