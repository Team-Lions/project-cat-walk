import React from 'react';
import StarRatings from 'react-star-ratings';
import { submitReview } from './PostReq.js';

const AddReview = () => {
    return (
        <>
            <h1>Adding a review form</h1>
            <h2>
            <StarRatings
				rating={3}
				starRatedColor="blue"
				numberOfStars={5}
				name='rating'
				/>
            </h2> 
        </>
    )
};

export default AddReview;