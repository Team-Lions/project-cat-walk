import React from 'react';
import axios from 'axios';
import token from '../../../public/token.js';
import AddReview from './AddReview.jsx';
import ReviewList from './ReviewList.jsx';


class Ratings extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  reviews: {},
		}
	  }
	
	  getReviews(productId) {
		//request to get all the styles available on single/specified product
		//returns a promise
		return axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hratx/reviews', {
		  headers: {
			'Authorization': token
		  },
		  params: {
			product_id: productId
		  }
		});
	  }
	
	 
	
	  componentDidMount() {
		Promise.all([
		  this.getReviews(this.props.productId),
		])
		.then((values) => {
		  this.setState({
			reviews: values[0].data,
		  });
		})
	  }
	
	  render() {
		return(
			<>
				<h1>Ratings</h1>
				<h2>{JSON.stringify(this.state.reviews)}</h2>
				<AddReview />
				<ReviewList />
			</>
		)
	  }
}

export default Ratings;