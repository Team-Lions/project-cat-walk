import React from 'react';
import axios from 'axios';
import token from '../../../public/token.js';
import AddReview from './AddReview.jsx';
import SingleReview from './SingleReview.jsx';
import RatingBreakDown from './RatingBreakDown.jsx';
import SortReview from './SortReview.jsx';


class Ratings extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  reviews: {},
		  metaData: this.props.metaData,
		  avgStarRating: this.props.starRating,
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
					<div className="sidebar">
						<RatingBreakDown metaData={this.state.metaData} starRating={this.state.avgStarRating}/>
					</div>
					<div className="mainReviews">
						<SortReview reviews={this.state.reviews} />
						<SingleReview reviews={this.state.reviews}/>
						<div className="reviewButtons">
							<button>
								MORE REVIEWS
							</button>
							<button>
								ADD A REVIEW +
							</button>
						</div>
					</div>
				</div>
			</>
		)
	  }
}

export default Ratings;