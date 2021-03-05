import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const SingleRelatedItem = ({ relatedItems }) => {

  // map over related items to format each card for a single item

  // need to add button to corner of image to add to favorites

  return (
    <div>
      <Card style={{ width: '16rem', height: '24rem'}}>
        <Button>Click Me</Button>
        <Card.Img variant="top" src={'FILL ME IN'} />
        <Card.Body>
          <Card.Text>
            Insert product category
          </Card.Text>
          <Card.Title>
            Insert product name
          </Card.Title>
          <Card.Text>
            Insert product review here
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
};

export default SingleRelatedItem;