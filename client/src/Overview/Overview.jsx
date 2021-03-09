import React from 'react';
import AddToCart from './AddToCart.jsx';
import axios from 'axios';
import token from '../../../public/token.js';
import parseSizeFirstSkus from './sizeFirstSkus.js';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfo: {},
      styles: [],
      selectedStyle: {}
    }
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
    Promise.all([
      this.getProductInfo(this.props.productId),
      this.getStyles(this.props.productId)
    ])
    .then((values) => {
      this.setState({
        productInfo: values[0].data,
        styles: values[1].data.results,
        selectedStyle: values[1].data.results[0]
      });
    })
  }

  render() {
    var sizeFirstSkus = parseSizeFirstSkus(this.state.selectedStyle.skus);
    var sizes = Object.keys(sizeFirstSkus);
    return(
      <AddToCart sizeFirstSkus={sizeFirstSkus} sizes={sizes} />
    )
  }
}

export default Overview;
