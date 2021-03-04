import React from 'react';
import axios from 'axios';

class Rating extends React.Component {
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
					"Authorization": 'df667317a900700ab8209e5799e288a47fe25e9b',
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
				<h1>Helen</h1>
			</div>
		);
	}
}

export default Rating;