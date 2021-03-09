import React from 'react';
import Card from 'react-bootstrap/Card';
import AddToYourFit from './AddToYourFit.jsx';
import placeHolderImg from './content/placeholderimg.jpeg';

const CardFormatter = (productId, productImage, placeHolderImg, productCategory, productName, productPrice, productRating, cardClick) => {
  return (
    <div>
      <Card border="dark" style={{ width: '16rem', height: '22rem'}}>
        <AddToYourFit />
        <Card.Img variant="top" src={productImage ? productImage : placeHolderImg} height="auto" width="100%"/>
        <Card.Body onClick={cardClick}>
          <Card.Subtitle className="mb-2 text-muted">
            {productCategory}
          </Card.Subtitle>
          <Card.Title>
            {productName}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {productPrice}
          </Card.Subtitle>
          <Card.Text>
            {productRating}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CardFormatter;