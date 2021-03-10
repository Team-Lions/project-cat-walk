import React from 'react';
import Card from 'react-bootstrap/Card';
import AddToYourFit from './AddToYourFit.jsx';
import placeHolderImg from './content/placeholderimg.jpeg';

const CardFormatter = ({id, image, placeHolderImg, category, name, price, rating, handleClick}) => {
  return (
    <div>
      <Card border="dark" style={{ width: '16rem', height: '22rem'}}>
        <AddToYourFit />
        {/* <Card.Img variant="top" src={image[0].thumbnail_url ? image[0].thumbnail_url : placeHolderImg} height="200px" width="auto" onClick={handleClick} id={id}/> */}
          <img className="carousel-img" src={image[0].thumbnail_url ? image[0].thumbnail_url : placeHolderImg} onClick={handleClick} id={id}></img>
          <Card.Body className="text-center" onClick={handleClick} id={id}>
            <Card.Subtitle className="mb-2 text-muted" onClick={handleClick} id={id}>
              {category}
            </Card.Subtitle>
            <Card.Title onClick={handleClick} id={id}>
              {name}
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted" onClick={handleClick} id={id}>
              {price}
            </Card.Subtitle>
            <Card.Text onClick={handleClick} id={id}>
              {rating}
            </Card.Text>
          </Card.Body>
      </Card>
    </div>
  )
}

export default CardFormatter;