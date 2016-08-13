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
			height: 400,
			overflow: 'auto',
			border: '1px solid #ccc',
			marginBottom: '20px'
		};
		const headerStyle = {
			backgroundColor: '#4d394b',
			color: '#fcfcfc',
			marginBottom: '0px'
		};
		const {chatName, currentComment, chatMessages} = this.props;
		return (
			<div>
				<h2 className="text-center text-uppercase"
					style={headerStyle}>
					{chatName}
				</h2>
				<div style={chatBoxStyle} className="pre-scrollable">
					<CommentList onSelectComment={this.onGetEditableComment}
								 data={chatMessages}
					/>
				</div>
				<CommentForm onSaveUpdate={this.onSaveUpdateComment}
							 editableComment={currentComment} />
			</div>
		);
	}

}
