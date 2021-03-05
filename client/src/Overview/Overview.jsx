import React from 'react';
import AddToCart from './AddToCart.jsx';

//props are:
//style = currently selected style object. To passed into Add to Cart.
//productStyles = all available styles for current product. To be passed into StyleSelector.
class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productStyles: [],
      selectedStyle: {},
      productInfo: {}
    }
  }

  changeStyle(e) {
    //event handler function to be passed down to style selector.
    //when a new selection is made this will run and update the state as needed
  }

  getStyles(productId) {
    //request to get all the styles available on single/specified product
    //returns a promise
    return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/${productId}/styles`, {
      headers: {
        'Authorization': token
      },
      params: {
        product_id: productId
      }
    });
  }

  getProductInfo(productId) {
    //request to get all product info for specified product
    //returns a promise
    return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/${productId}`,{
      headers: {
        'Authorization': token
      },
      params: {
        product_id: productId
      }
    });
  }

  componentDidMount() {

  }

  render() {
    return (
      <AddToCart skus={this.state.selectedStyle.skus}/>
    )
  }
}

export default Overview;
