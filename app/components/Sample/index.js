import React, {Component} from 'react';

class Sample extends Component {

	render(){
		return (
			<div>
				<p style={{border: '1px solid #cdcdcd', borderRadius: '5px', padding: '10px'}}>
					This is the sample component
				</p>
				<button className="btn btn-primary">Test Button</button>
			</div>
		);
	}

}

export default Sample;