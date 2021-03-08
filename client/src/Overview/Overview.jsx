//tools
import React from 'react';
import axios from 'axios';
//components
import AddToCart from './AddToCart.jsx';
import StyleSelector from './StyleSelector.jsx';
import ProductTitleAndPrice from './ProductTitleAndPrice.jsx';
import ProductDescription from './ProductDescription.jsx';
import SocialMediaButtons from './SocialMediaButtons.jsx';
import ImageGalleryDefault from './ImageGalleryDefault.jsx';
//misc
import token from '../../../public/token.js';
import parseSizeFirstSkus from './sizeFirstSkus.js';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfo: {},
      styles: [],
      selectedStyle: {},
      isLoading: true
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

  changeStyle(e) {
    this.setState({
      selectedStyle: this.state.styles[e.target.title]
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
        selectedStyle: values[1].data.results[0],
        isLoading: false
      });
    })
  }

  render() {
    if(this.state.isLoading) {
      return <div>Styles loading</div>
    }
    var sizeFirstSkus = parseSizeFirstSkus(this.state.selectedStyle.skus);
    var sizes = Object.keys(sizeFirstSkus);
    return(
      <div className='overview' key={this.state.selectedStyle.name}>
        <ProductTitleAndPrice productInfo={this.state.productInfo} starRating={this.props.starRating} price={this.state.selectedStyle.original_price} salePrice={this.state.selectedStyle.sale_price} ratings={this.props.ratings}/>
        <ImageGalleryDefault images={this.state.selectedStyle.photos} styleName={this.state.selectedStyle.name} />
        <AddToCart sizeFirstSkus={sizeFirstSkus} sizes={sizes} />
        <StyleSelector styles={this.state.styles} selectedStyle={this.state.selectedStyle} changeStyle={this.changeStyle.bind(this)} />
        <ProductDescription productInfo={this.state.productInfo} />
        <SocialMediaButtons />
      </div>
    )
  }
}

export default Overview;
