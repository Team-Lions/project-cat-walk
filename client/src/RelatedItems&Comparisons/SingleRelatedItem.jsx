import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import placeHolderImg from './content/placeholderimg.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';

const SingleRelatedItem = ({ relatedItems }) => {

  // map over related items to format each card for a single item

  // need to add button to corner of image to add to favorites

  let onCardClick = (e) => {
    e.preventDefault();
    console.log('Clicked');
  };

  return (
    <div id="card">
      <Card border="dark" style={{ width: '16rem', height: '18rem'}} onClick={onCardClick}>
        <Card.Img variant="top" src={placeHolderImg} />
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">
            Insert product category
          </Card.Subtitle>
          <Card.Title>
            Insert product name
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            $300.00
          </Card.Subtitle>
          <Card.Text>
            ★★★★★
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
};

export default SingleRelatedItem;