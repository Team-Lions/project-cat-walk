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
      <div id="your-fit">
        <h4>
          Your Outfit
        </h4>
        Insert YourFit Carousel
      </div>
    )
  }
};

export default YourFit;