import React from 'react';
import axios from 'axios';
import token from '../../../public/token.js';
import AddReview from './AddReview.jsx';
import ReviewList from './ReviewList.jsx';
import SingleReview from './SingleReview.jsx';


class Ratings extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  reviews: {},
		  isLoading: true
		}
	  }
	
	  getReviews(productId) {
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
			isLoading: false
		  });
		})
	  }
	
	  render() {
		if(this.state.isLoading) {
			return <div>Loading</div>
		}
		return(
			<>
				<div id="RatingsAndReviews">
					<SingleReview reviews={this.state.reviews}/>

				</div>
			</>
		)
	  }
}

export default Ratings;