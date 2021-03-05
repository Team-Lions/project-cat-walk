import React from 'react';
import AddToCart from './AddToCart.jsx';

//props are:
//style = currently selected style object. To passed into Add to Cart.
//productStyles = all available styles for current product. To be passed into StyleSelector.
var Overview  = (props) => {
  return (
    <AddToCart skus={props.style.skus}/>
  );
};

export default Overview;