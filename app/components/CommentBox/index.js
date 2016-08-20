import React, {Component} from 'react';
import {createEmptyComment} from 'components/Chat';
import CommentList from 'components/CommentList';
import CommentForm from 'components/CommentForm';


export default class CommentBox extends Component {
	constructor(props) {
		super(props);
	}

	onSaveUpdateComment = (comment) => {
		this.props.onSaveUpdateComment(comment);
	};

	onGetEditableComment = (el) => {
		this.props.onSelectComment(el.currentTarget.dataset.id);
	};

	render() {
		const chatBoxStyle = {
			height: '80vh',
      overflow: 'auto',
		};
		const headerStyle = {
			color: '#4d394b',
			marginBottom: '0px',
      marginTop: '0px',
      height: '10vh',
      borderBottom: '1px solid #ccc'
		};

    const commentFormStyle ={
      height: '10vh'
    }
		const {chatName, currentComment, chatMessages} = this.props;
		return (
			<div>
				<h2 className="text-center text-uppercase"
					style={headerStyle}>
					{chatName}
				</h2>
				<div style={chatBoxStyle}>
					<CommentList onSelectComment={this.onGetEditableComment}
								 data={chatMessages}
					/>
				</div>
        	<div>
				    <CommentForm
                  onSaveUpdate={this.onSaveUpdateComment}
						      editableComment={currentComment}
                  style={commentFormStyle}/>
        	</div>
			</div>
		);
	}

}
