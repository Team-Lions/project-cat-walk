import React from 'react';
import StarRatings from 'react-star-ratings';
import { ProgressBar } from 'react-bootstrap';
import roundStarRating from '../roundStarRating.js';
import calculateRecommended from './calculateRecommended.js';

const RatingBreakDown = ({ metaData, starRating }) => {
  let recommended = calculateRecommended(metaData.recommended);
  let overallRating = roundStarRating(starRating);
  return (
    <div>
      <b>Ratings & Reviews</b>
      <div className='RatingSummary'>
        <div className='overallRating'>{overallRating}</div>
          <div className='stars'>
            <StarRatings
              rating={overallRating}
              starRatedColor='deeppink'
              numberOfStars={5}
              name='rating'
              starDimension='20px'
            />
          </div>
      </div>
      <div className="RatingBreakdown">
        {recommended}% of reviews recommend this product
      </div>
      <div className="Progress">
        <br/>
        5 stars <ProgressBar now={metaData.ratings['5']} max={10}/>
        4 stars <ProgressBar now={metaData.ratings['4']} max={10}/>
        3 stars <ProgressBar now={metaData.ratings['3']} max={10}/>
        2 stars <ProgressBar now={metaData.ratings['2']} max={10}/>
        1 stars <ProgressBar now={metaData.ratings['1']} max={10}/>
      </div>


    </div>
  );
};

export default RatingBreakDown;
 