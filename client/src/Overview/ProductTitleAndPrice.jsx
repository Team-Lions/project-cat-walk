import React from 'react';

//recieved props ratings (object), productInfo (object), starRating (number), price (string), salePrice (string)
var ProductTitleAndPrice = (props) => {
  var numRatings = 0;
  for (var k in props.ratings) {
    numRatings += Number.parseInt(props.ratings[k]);
  }

  return (
    <div className="ProductTitleAndPrice">
      <div hidden={numRatings === 0}>Star Rating: {props.starRating} <a href='#RatingsAndReviews'>Read all {numRatings} reviews</a></div>
      <p>{props.productInfo.category}</p>
      <p><b>{props.productInfo.name}</b></p>
      {props.salePrice === null ?
        <p>${props.price}</p>
        :
        <p>
          <div style={{color: 'red'}}>${props.salePrice} </div>
          <div style={{'text-decoration':'line-through'}}>${props.price}</div>
        </p>
      }
    </div>
  )
};

export default ProductTitleAndPrice;