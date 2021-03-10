import React from 'react';
import StarRatings from 'react-star-ratings';
import moment from 'moment';

const SingleReview = ({ reviews }) => {
  console.log(reviews.results)
  return (
    <div>
      {reviews.results.map((review) => {
        return (
          <div className="reviewCard">
            <div className='stars'>
              <StarRatings
                rating={review.rating}
                starRatedColor='#394a6d'
                numberOfStars={5}
                name='rating'
                starDimension='20px'
              />
              <div className='date'>{review.reviewer_name}, {moment(review.date).format('MMMM Do YYYY')}</div>
              <br />
              <div className='ReviewText'>
                <strong>{review.summary}</strong>
                <div>{review.body}</div>
                <div id='helpfulAndReport'>
                  Helpful?&nbsp;
                  <span
                    onClick={(e) => {
                      alert('helpful')
                    }}
                  >
                    Yes
                  </span>{' '}
                  <span>
                    Report
                  </span>
                </div>
              </div>
              {(review.photos.length > 1) ? review.photos.map((photo) => {
                return <img src={photo.url} width="400" height="400"></img>
              }) : ''}
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default SingleReview;
 