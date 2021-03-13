import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';
import moment from 'moment';
import 'font-awesome/css/font-awesome.min.css';
import ModalImage from 'react-modal-image';
import { submitHelp } from './PostReq';

const SingleReview = ({ reviews }) => {
	const [help, setHelp] = useState(false);

	return (
		<div>
			{reviews.map((review) => {
				return (
					<div className="reviewCard" key={review.review_id}>
						<div className="topReview">
							<div className="stars">
								<StarRatings
									rating={review.rating}
									starRatedColor="deeppink"
									numberOfStars={5}
									name="rating"
									starDimension="20px"
								/>
							</div>
							<div className="date">
								{review.reviewer_name},{' '}
								{moment(review.date).format('MMMM Do YYYY')}
							</div>
						</div>
						<br />
						<div className="ReviewText">
							<div style={{ fontSize: '20px', fontWeight: '700' }}>
								{review.summary}
							</div>
							<div
								style={{
									fontSize: '14px',
									fontWeight: '100',
									fontStyle: 'italic',
								}}
							>
								{review.body}
							</div>
							<br />
						</div>
						{review.recommend ? (
							<div className="recommend">
								<span>
									<i class="fa fa-check" style={{ color: 'deeppink' }}></i>
								</span>
								<strong>&nbsp; I recommend this product</strong>
							</div>
						) : (
							''
						)}
						<br />
						{review.response === '' || review.response === null ? (
							''
						) : (
							<div className="response">
								<strong>Response from seller: {review.response}</strong>
							</div>
						)}
						<br />

						<div className="helpfulAndReport">
							Helpful? &nbsp;
							{help
								? `(${review.helpfulness + 1})`
								: `(${review.helpfulness - 1})`}{' '}
							&nbsp;&nbsp;
							<a
								onClick={(e) => {
									let helpCount = review.helpfulness;
									let reviewId = review.review_id;
									let help = true;
									submitHelp(helpCount, reviewId, help);
									setHelp(true);
								}}
							>
								Yes &nbsp;
							</a>
							<a
								onClick={(e) => {
									let helpCount = review.helpfulness;
									let reviewId = review.review_id;
									let help = false;
									submitHelp(helpCount, reviewId, help);
									setHelp(false);
								}}
							>
								No &nbsp;
							</a>
							<span>
								&nbsp;|&nbsp; Report{' '}
								<i className="fa fa-flag" style={{ color: 'deeppink' }}></i>
							</span>
						</div>
						<div className="modalReview">
							{review.photos.length > 1
								? review.photos.map((photo) => {
										return (
											<ModalImage
												small={photo.url}
												large={photo.url}
												className="modalImg"
											/>
										);
								  })
								: ''}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default SingleReview;
