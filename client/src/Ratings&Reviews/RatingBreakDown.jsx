import React from 'react';
import StarRatings from 'react-star-ratings';

const RatingBreakDown = () => {
  
  return (
    <div>
      <b>Ratings & Reviews</b>
      <div className='RatingSummary'>
        <div className='overallRating'>{3}</div>
          <div className='jstars'>
            <StarRatings
              rating={2}
              starRatedColor='#394a6d'
              numberOfStars={5}
              name='rating'
              starDimension='20px'
            />
          </div>
      </div>
      <div className="RatingBreakdown">
        100%
      </div>


    </div>
  );
};

export default RatingBreakDown;
 