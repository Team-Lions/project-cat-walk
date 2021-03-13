import React from 'react';
import Card from 'react-bootstrap/Card';
import ComparisonModal from './ComparisonModal.jsx';
import ReactStarRating from "react-star-ratings-component";
import placeHolderImg from './content/placeholderimg.jpeg';


const YourOutfitCardFormatter = ({productDetails, handleClick}) => {
  let id = productDetails[0].data.id;
  let category = productDetails[0].data.category
  let name = productDetails[0].data.name
  let price = productDetails[0].data.default_price
  let image = productDetails[1].data.results[0].photos[0].thumbnail_url
  let ratings = productDetails[2].data.ratings
  let numberOfStars;

  const starConverter = function(totalRatings) {
    if (!Object.keys(totalRatings).length) {
      return 0
    }
    let sumOfStars = 0;
    let weightedStars = 0
    for (var value in totalRatings) {
      let ratingValue = value;
      let numberOfRatings = parseInt(totalRatings[value]);
      sumOfStars += numberOfRatings;
      weightedStars += numberOfRatings * ratingValue;
    }
    let starRating = weightedStars/sumOfStars;
    numberOfStars = starRating;
  }

  starConverter(ratings);

  return (
    <div id='yourfit-card'>
      <Card className="yourfit-rendered-cards" border="info" style={{ width: '16rem', height: '23rem'}}>
          <button id='remove-button' className={id} onClick={handleClick}>✗</button>
          <img className="carousel-img" src={image ? image : placeHolderImg}></img>
          <Card.Body className="text-center" >
            <Card.Subtitle className="mb-2 text-muted"  >
              {category}
            </Card.Subtitle>
            <Card.Title  >
              {name}
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted"  >
              {`$${price}`}
            </Card.Subtitle>
            <ReactStarRating
                numberOfStar={5}
                numberOfSelectedStar={numberOfStars}
                colorFilledStar="deeppink"
                colorEmptyStar="black"
                starSize="15px"
            />
          </Card.Body>
      </Card>
    </div>
  )
}

export default YourOutfitCardFormatter;