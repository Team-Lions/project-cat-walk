import React from 'react';
import ReactStarRating from 'react-star-ratings-component';
import roundStarRating from '../roundStarRating.js';
import styled, { css } from 'styled-components';

const Shoppingcart = styled.div`
height: 25px;
width: 70px;
display: grid;
grid-column: 50px 20px;
justify-items: center;
`;

const Num = styled.div`
grid-column: 2;
padding-bottom: 0;
font-size: 15px;
align-self: end;
`;

const RatingData = styled.div`
  width: 250px;
  margin-right: 0px;
  display: flex;
  align-items: center;
  justify-content: right;
  flex-flow: row no-wrap;
`;

const A = styled.a`
  display: inline-block;
  font-size: 12px;
  padding: 2px;
  color: deepskyblue;
  :hover {
    color: deeppink;
  }
`;

const Category = styled.div`
  font-size: 25px;
`;

const Name = styled.div`
  font-size: 50px;
`;

const TopLineContainer = styled.div`
  display: flex;
  justify-content: space-betwee;
`;

//recieved props numReviews (int), productInfo (object), starRating (number), price (string), salePrice (string)
var ProductTitleAndPrice = (props) => {
  return (
    <div id="productTitleAndPrice">
      <TopLineContainer>
        <RatingData hidden={props.numReviews === 0}>
          <ReactStarRating numberOfStar={5} numberOfSelectedStar={roundStarRating(props.starRating)} colorFilledStar="deeppink" colorEmptyStar="grey" starSize="15px" spaceBetweenStar="3px" disableOnSelect={true} name="rating" />
          <A id="ratingsLink" href="#RatingsAndReviews">Read all reviews</A>
        </RatingData>
        <Shoppingcart>
          <i class="fas fa-shopping-cart fa-lg" style={{"gridColumn": 1, "alignSelf": "center"}}></i>
          <Num>{props.cartCount}</Num>
        </Shoppingcart>
      </TopLineContainer>
      <Category>{props.productInfo.category}</Category>
      <Name><b>{props.productInfo.name}</b></Name>
      {props.salePrice === null ?
        <p style={{margin: "10px 0 10px 0"}}>${props.price}</p>
        :
        <p style={{margin: "10px 0 10px 0"}}>
          <span style={{color: "deeppink"}}>${props.salePrice} </span>
          <span style={{textDecoration:"line-through"}}>${props.price}</span>
        </p>
      }
    </div>
  )
};

export default ProductTitleAndPrice;



// const Container = styled.header`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: nowrap;
//   justify-content: space-between;
//   align-items: flex-end;
//   padding-bottom: 5px;
// `;

