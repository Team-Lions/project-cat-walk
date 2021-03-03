import React from 'react';
import AddToCart from './AddToCart.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <AddToCart/>
    );
  }
};

export default Overview;