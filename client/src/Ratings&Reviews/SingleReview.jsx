import React from 'react';
import StarRatings from 'react-star-ratings';
import moment from 'moment';

const SingleReview = ({ reviews }) => {
  console.log('REVIEWS: ', reviews)
  return (
    <div>
      {reviews.results.map((review) => {
        return (
          <div className="reviewCard">
            <div className="topReview">
              <div className='stars'>
                <StarRatings
                  rating={review.rating}
                  starRatedColor='deeppink'
                  numberOfStars={5}
                  name='rating'
                  starDimension='20px'
                />
              </div>
              <div className='date'>
                {review.reviewer_name}, {moment(review.date).format('MMMM Do YYYY')}
              </div>
            </div>
            <br />
            <div className='ReviewText'>
              <strong>{review.summary}</strong>
              <div>{review.body}</div>
              <br />
            </div>
            
            {(review.response === '' || review.response === null) ? ''
            : 
            <div className='response'>
              <strong>Response: {review.response}</strong>
            </div>
            }
            <br />
            <div className='helpfulAndReport'>
                Helpful? &nbsp;
                <span
                  onClick={(e) => {
                    alert('helpful')
                  }}
                >
                  Yes &nbsp;
                </span>({review.helpfulness}) 
                <span>
                 &nbsp;|&nbsp; Report
                </span>
              </div>
            {(review.photos.length > 1) ? review.photos.map((photo) => {
              return <img src={photo.url} width="400" height="400"></img>
            }) : ''}
          </div>
        )
      })}
    </div>
  );
};

export default SingleReview;
 