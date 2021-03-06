import React from 'react';
import StarRatings from 'react-star-ratings';
import { ProgressBar } from 'react-bootstrap';
import roundStarRating from '../roundStarRating.js';
import calculateRecommended from './calculateRecommended.js';
import ProductBreakDown from './ProductBreakDown.jsx';

const RatingBreakDown = ({ metaData, starRating }) => {
  let recommended = calculateRecommended(metaData.recommended);
  let overallRating = roundStarRating(starRating);
  return (
    <div>
      <b style={{"fontSize":"25px"}}>Ratings & Reviews</b>
      <div className='RatingSummary'>
        <div className='overallRating'>{overallRating}</div>
        <div className='tstars'>
          <StarRatings
            rating={overallRating}
            starRatedColor='deeppink'
            numberOfStars={5}
            name='rating'
            starDimension='20px'
          />
        </div>
      </div>
      <br/>
      <div className="RatingBreakdown">
        {recommended}% of reviews recommend this product
      </div>
      <div className="Progress">
        5 stars <ProgressBar now={metaData.ratings['5']} max={10} />
        4 stars <ProgressBar now={metaData.ratings['4']} max={10}/>
        3 stars <ProgressBar now={metaData.ratings['3']} max={10}/>
        2 stars <ProgressBar now={metaData.ratings['2']} max={10}/>
        1 stars <ProgressBar now={metaData.ratings['1']} max={10}/>
      </div>
      <ProductBreakDown metaData={metaData}/>
    </div>
  );
};

export default RatingBreakDown;