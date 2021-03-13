import React from 'react';
import Card from 'react-bootstrap/Card';
import placeHolderImg from './content/placeholderimg.jpeg';
import ReactStarRating from "react-star-ratings-component";

const StockCard = ({favButton}) => {
  return (
    <div id='stock-card'>
      <Card border="info" bg="whitesmoke" style={{ width: '16rem', height: '23rem'}}>
        <button id='add-button' onClick={favButton}><span>&#43;</span></button>
          <img className="carousel-img" src={placeHolderImg}></img>
          <Card.Body className="text-center">
            <Card.Subtitle className="mb-2 text-muted">
              Click to
            </Card.Subtitle>
            <Card.Title>
              Add
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Items
            </Card.Subtitle>
            <ReactStarRating
                numberOfStar={5}
                numberOfSelectedStar={5}
                colorFilledStar="deeppink"
                colorEmptyStar="black"
                starSize="15px"
            />
          </Card.Body>
      </Card>
    </div>
  )
}

export default StockCard