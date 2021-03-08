import React from 'react';
import axios from 'axios';
import token from '../../../public/token.js';

class Ratings extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			values: '',
		};
	}

	componentDidMount() {
		axios
			.get('https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/', {
				headers: {
					"Authorization": token,
				},
				params: {
					product_id: 21112,
				},
			})
			.then((res) => {
				console.log(res.data);
			})
			.catch((error) => {
				console.error(error);
			});
	}

	render() {
		return (
			<div>
				<h1>Hello</h1>
			</div>
		);
	}
}

export default Ratings;