import React from 'react';
import axios from 'axios';

class Rating extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			values: '',
		};
	}

	// componentDidMount() {
	// 	axios
	// 		.get('https://app-hrsei-api.herokuapp.com/api/fec2/hratx/reviews/', {
	// 			headers: {
	// 				"Authorization": 'fa912ab9e634977280cf067e1632685789a10cc1',
	// 			},
	// 			params: {
	// 				product_id: 21112,
	// 			},
	// 		})
	// 		.then((res) => {
	// 			console.log(res.data);
	// 		})
	// 		.catch((error) => {
	// 			console.error(error);
	// 		});
	// }

	render() {
		return (
			<div>
				<h1>dfjghdfkjghk</h1>
			</div>
		);
	}
}

export default Rating;