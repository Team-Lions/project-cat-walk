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
		  resultReview:[],
		  index:2,
		  metaData: this.props.metaData,
		  avgStarRating: this.props.starRating,
		  isLoading: true
		}
		this.loadMore = this.loadMore.bind(this);
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
	
	loadMore() {
		if (this.state.index > this.state.reviews.results.length) {
			this.setState({
				index: 2,
				resultReview: this.state.reviews.results.slice(0, this.state.index)
			})
		} else {
			this.setState({
				index: this.state.index + 2,
				resultReview: this.state.reviews.results.slice(0, this.state.index)
			})
		}
	}

	componentDidMount() {
	Promise.all([
		this.getReviews(this.props.productId),
	])
	.then((values) => {
		this.setState({
		reviews: values[0].data,
		resultReview: values[0].data.results.slice(0, this.state.index),
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
					<SingleReview reviews={this.state.resultReview}/>
					<div className="reviewButtons">
						{(this.state.resultReview.length === this.state.reviews.results.length) ? <button className="ReviewBTN" onClick={this.loadMore}>LESS REVIEWS</button> : <button className="ReviewBTN" onClick={this.loadMore}>MORE REVIEWS</button>}
						<button className="ReviewBTN">
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