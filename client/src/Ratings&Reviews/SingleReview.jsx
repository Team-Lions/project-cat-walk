import React from 'react';
import StarRatings from 'react-star-ratings';
import moment from 'moment';
import 'font-awesome/css/font-awesome.min.css';
import ModalImage from "react-modal-image";

const SingleReview = ({ reviews }) => {
  return (
    <div>
      {reviews.map((review) => {
        return (
          <div className="reviewCard"  key={review.review_id}>
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
            {(review.recommend) ? ''
            : 
            <div className='recommend'>
              <span>
                <i class="fa fa-check" style={{"color":"deeppink"}}></i>
              </span> 
              <strong >&nbsp; I recommend this product</strong>
            </div>
            }
            <br />
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
                 &nbsp;|&nbsp; Report <i className="fa fa-flag" style={{"color":"deeppink"}}></i>
                </span>
              </div>
              <div className="modalReview">
                {(review.photos.length > 1) ? review.photos.map((photo) => {
                  return (
                    <ModalImage
                    small={photo.url}
                    large={photo.url}
                    className="modalImg"
                    />
                  )}) : ''}
              </div>
          </div>
        )
      })}
    </div>
  );
};

export default SingleReview;
 