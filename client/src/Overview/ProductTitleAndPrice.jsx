import React from 'react';
import ReactStarRating from 'react-star-ratings-component';
import roundStarRating from '../roundStarRating.js';
import styled, { css } from 'styled-components';

const RatingData = styled.div`
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: right;
  flex-flow: row no-wrap;
`;

const A = styled.a`
  display: inline-block;
  font-size: 12px;
  padding: 2px;
`;

const Category = styled.div`
  font-size: 25px;
`;

const Name = styled.div`
  height: 50px;
  font-size: 50px;
  line-height: 50px;
`;

//recieved props ratings (object), productInfo (object), starRating (number), price (string), salePrice (string)
var ProductTitleAndPrice = (props) => {
  var numRatings = 0;
  for (var k in props.ratings) {
    numRatings += Number.parseInt(props.ratings[k]);
  }

  return (
    <div>
      <RatingData hidden={numRatings === 0}>
        <ReactStarRating numberOfStar={5} numberOfSelectedStar={roundStarRating(props.starRating)} colorFilledStar="gold" colorEmptyStar="grey" starSize="15px" spaceBetweenStar="3px" disableOnSelect={true} name="rating" />
        <A href="#RatingsAndReviews">Read all {numRatings} reviews</A>
      </RatingData>
      <Category>{props.productInfo.category}</Category>
      <Name><b>{props.productInfo.name}</b></Name>
      {props.salePrice === null ?
        <p style={{margin: "10px 0 10px 0"}}>${props.price}</p>
        :
        <p style={{margin: "10px 0 10px 0"}}>
          <span style={{color: "red"}}>${props.salePrice} </span>
          <span style={{textDecoration:"line-through"}}>${props.price}</span>
        </p>
      }
    </div>
  )
};

export default ProductTitleAndPrice;