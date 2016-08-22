import React, { Component, PropTypes } from 'react';
import Input from 'components/Input';
import classNames from 'classnames/bind';
import styles from './styles.css';


let commentFormStyles = classNames.bind(styles);

export default class CommentForm extends Component {


    handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const author = this.inputForAuthor.getValue().trim();
        const text = this.inputForText.getValue().trim();
        if (!text || !author) {
          return;
        }
        const { editableComment, onSaveUpdate } = this.props;
        const comment = Object.assign({}, editableComment, {author, text});
        onSaveUpdate(comment);
    };

    render() {
        const {editableComment} = this.props;
        const spanStyle = commentFormStyles({
            'span-colors':true,
            'input-group-addon':true
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
                        value={editableComment.author}
                        className="form-control"
                    />
                    <span className={spanStyle}>&</span>
                    <Input
                        ref={me => this.inputForText = me}
                        placeholder="Say something..."
                        type="text"
                        value={editableComment.text}
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
    editableComment: PropTypes.object.isRequired,
    onSaveUpdate: PropTypes.func.isRequired
}
