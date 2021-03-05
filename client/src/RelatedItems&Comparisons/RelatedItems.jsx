import React from 'react';
import axios from 'axios';
import SingleRelatedItem from './SingleRelatedItem.jsx';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";


//WE NEED CONTENT LOADERS IN OUR WEBPACK CONFIG AND PACKAGE JSON

class RelatedItems extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      relatedItems: []
    }
    this.responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    }
  }
  // take current product id

  //make get request for related items

  //in then block store related items array
  // loop through items and make get request for each item and push their data into relatedItems array


  // pass dowm related items to single related item
  render() {
    return (
      <div>
        <Carousel responsive={this.responsive}>
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
          <div>Item 4</div>
        </Carousel>;
      </div>
    )
  }
};

export default RelatedItems;