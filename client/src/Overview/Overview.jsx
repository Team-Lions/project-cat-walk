import React from 'react';
import AddToCart from './AddToCart.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var dummySkus = {
      37: {
        quantity: 8,
        size: 'XS'
      },
      38: {
        quantity: 16,
        size: 'S'
      },
      39: {
        quantity: 17,
        size: 'M'
      }
    };
    return (
      <AddToCart skus={dummySkus}/>
    );
  }
};

export default Overview;