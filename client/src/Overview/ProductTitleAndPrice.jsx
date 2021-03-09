import React from 'react';
import StarRatings from 'react-star-ratings';

//recieved props ratings (object), productInfo (object), starRating (number), price (string), salePrice (string)
var ProductTitleAndPrice = (props) => {
  var numRatings = 0;
  for (var k in props.ratings) {
    numRatings += Number.parseInt(props.ratings[k]);
  }

  return (
    <div className="ProductTitleAndPrice">
      <div hidden={numRatings === 0}>Star Rating:
        <StarRatings rating={props.starRating} starRatedColor="gold" numberOfStars={5} name="rating" />
        <a href="#RatingsAndReviews">Read all {numRatings} reviews</a>
      </div>
      <p>{props.productInfo.category}</p>
      <p><b>{props.productInfo.name}</b></p>
      {props.salePrice === null ?
        <p>${props.price}</p>
        :
        <p>
          <span style={{color: "red"}}>${props.salePrice} </span>
          <span style={{textDecoration:"line-through"}}>${props.price}</span>
        </p>
      }
    </div>
  )
};

export default ProductTitleAndPrice;