//tools
import React from 'react';
import axios from 'axios';
import styled, { css } from 'styled-components';
import Spinner from 'react-bootstrap/Spinner'
//components
import AddToCart from './AddToCart.jsx';
import StyleSelector from './StyleSelector.jsx';
import ProductTitleAndPrice from './ProductTitleAndPrice.jsx';
import SocialMediaButtons from './SocialMediaButtons.jsx';
import ImageGalleryDefault from './ImageGalleryDefault.jsx';
//misc
import token from '../../../public/token.js';
import parseSizeFirstSkus from './sizeFirstSkus.js';

const Placeholder = styled.div`
  margin: 10px;
  display: grid;
  grid-template-rows: 600px 150px;
  grid-template-columns: 60% 40%;
  justify-items: center;
  grid-row-gap: 25px;
`;

const OverviewGrid = styled.div`
  margin: 10px;
  display: grid;
  grid-template-rows: max-content 150px;
  grid-template-columns: 60% 40%;
  justify-items: center;
  grid-row-gap: 25px;
`;

const Gallery = styled.div`
  grid-column: 1;
  grid-row: 1;
  align-self: center;
  justify-self: end;
  padding-right: 25px;
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
  width: 700px;
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
      numReviews: null,
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

  getReviews(productId) {
    return axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hratx/reviews', {
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
      this.getStyles(this.props.productId),
      this.getReviews(this.props.productId)
    ])
    .then((values) => {
      this.setState({
        productInfo: values[0].data,
        styles: values[1].data.results,
        selectedStyle: values[1].data.results[0],
        numReviews: values[2].data.results.length,
        isLoading: false
      });
    })
  }

  render() {
    if(this.state.isLoading) {
      return (
        <Placeholder>
          <div style={{"gridColumn": 1, "gridRow": 1}}>
            {/* <Spinner animation="border" role="status"></Spinner> */}
          </div>
        </Placeholder>
      )
    }
    var sizeFirstSkus = parseSizeFirstSkus(this.state.selectedStyle.skus);
    var sizes = Object.keys(sizeFirstSkus);
    return(
      <OverviewGrid key={this.state.selectedStyle.name}>
        <Gallery>
          <ImageGalleryDefault images={this.state.selectedStyle.photos} styleName={this.state.selectedStyle.name} />
        </Gallery>
        <Selections>
          <ProductTitleAndPrice productInfo={this.state.productInfo} starRating={this.props.starRating} price={this.state.selectedStyle.original_price} salePrice={this.state.selectedStyle.sale_price} numReviews={this.state.numReviews} cartCount={this.props.cartCount}/>
          <StyleSelector styles={this.state.styles} selectedStyle={this.state.selectedStyle} changeStyle={this.changeStyle.bind(this)} />
          <AddToCart sizeFirstSkus={sizeFirstSkus} sizes={sizes} updateCart={this.props.updateCart}/>
          <SocialMediaButtons />
        </Selections>
        <Description>
          <div style={{fontSize: "20px"}}><b>{this.state.productInfo.slogan}</b></div>
          <div>{this.state.productInfo.description}</div>
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
