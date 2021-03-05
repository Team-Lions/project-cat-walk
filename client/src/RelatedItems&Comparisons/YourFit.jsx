import React from 'react';
import Carousel from 'react-multi-carousel';

class YourFit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      favorites: []
    }
  }


  render() {
    return (
      <div>
        <h3>
          Your Outfit
        </h3>
        Insert YourFit Carousel
      </div>
    )
  }
};

export default YourFit;