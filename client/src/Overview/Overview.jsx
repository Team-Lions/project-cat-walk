//tools
import React from 'react';
import axios from 'axios';
import styled, { css } from 'styled-components';
//components
import AddToCart from './AddToCart.jsx';
import StyleSelector from './StyleSelector.jsx';
import ProductTitleAndPrice from './ProductTitleAndPrice.jsx';
import SocialMediaButtons from './SocialMediaButtons.jsx';
import ImageGalleryDefault from './ImageGalleryDefault.jsx';
//misc
import token from '../../../public/token.js';
import parseSizeFirstSkus from './sizeFirstSkus.js';

const OverviewGrid = styled.div`
  display: grid;
  grid-template-rows: 75% 25%;
  grid-template-columns: 66% 34%;
`;

const Gallery = styled.div`
  grid-column: 1;
  grid-row: 1;
  align-self: center;
  justify-self: center;
`;

  const Selections = styled.div`
  grid-column: 2;
  grid-row: 1;
  align-self: start;
  justify-self: start;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;

const Description = styled.div`
  grid-column: 1;
  grid-row: 2;
  justify-self: end;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;

const Features = styled.ul`
  grid-column: 2;
  grid-row: 2;
  justify-self: start;
  border-left: 2px solid deepskyblue;
`;

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

  changeStyle(index) {
    this.setState({
      selectedStyle: this.state.styles[index]
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
      <OverviewGrid key={this.state.selectedStyle.name}>
        <Gallery>
          <ImageGalleryDefault images={this.state.selectedStyle.photos} styleName={this.state.selectedStyle.name} />
        </Gallery>
        <Selections>
          <ProductTitleAndPrice productInfo={this.state.productInfo} starRating={this.props.starRating} price={this.state.selectedStyle.original_price} salePrice={this.state.selectedStyle.sale_price} ratings={this.props.ratings}/>
          <StyleSelector styles={this.state.styles} selectedStyle={this.state.selectedStyle} changeStyle={this.changeStyle.bind(this)} />
          <AddToCart sizeFirstSkus={sizeFirstSkus} sizes={sizes} />
        </Selections>
        <Description>
          <div><b>{this.state.productInfo.slogan}</b></div>
          <div>{this.state.productInfo.description}</div>
          <SocialMediaButtons />
        </Description>
        <Features>
          {this.state.productInfo.features.map((feature) => {
            return <li>{feature.value} {feature.feature}</li>;
          })}
        </Features>
      </OverviewGrid>
    )
  }
}

export default Overview;
