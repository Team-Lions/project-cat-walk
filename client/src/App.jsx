//libraries
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled, { css } from 'styled-components';
// header and footer
import Header from './Header.jsx';
import Footer from './Footer.jsx';
//widgets
import Overview from './Overview/Overview.jsx';
import Ratings from './Ratings&Reviews/Ratings.jsx'
import RelatedItems from './RelatedItems&Comparisons/RelatedItems.jsx';
import QnA from './QnA/QnA.jsx'
import YourFit from './RelatedItems&Comparisons/YourFit.jsx'
//Misc
import calculateStarReview from './calculateStarReview.js';
import token from '../../public/token.js';
import appCss from './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProductId: null,
      reviewMetaData: {},
      starRating: 0,
      isLoading: true
    }
    this.changeProduct = this.changeProduct.bind(this)
    this.handleProductChange = this.handleProductChange.bind(this)
  }

  getProductList() {
    //request to get all products
    //returns a promise
    return axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products', {
      headers: {
        'Authorization': token
      },
    });
  }

  //Ratings and Reviews related Get requests
  getReviewMetaData(productId) {
    //request to get review metadata on a specified product
    //returns a promise
    return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/reviews/meta`, {
      headers: {
        'Authorization': token
      },
      params: {
        product_id: productId
      }
    });
  }

  //will probably need to update to be an event handler function for when a new product is selected
  changeProduct(productId) {
    var newState = {};
    newState.selectedProductId = productId;
    this.getReviewMetaData(productId)
    .then((reviewMetadata) => {
      newState.reviewMetaData = reviewMetadata.data;
      newState.starRating = calculateStarReview(newState.reviewMetaData.ratings);
      newState.isLoading = false;
      console.log('newstate: ', newState);
      this.setState(newState);
    })
    .catch((err) => {
      console.log('error get overview data: ', err);
    })
  }


  componentDidMount() {
    //bascially the same as changing the selected product, but has to retrieve product list at the outset
    this.getProductList()
    .then((products) => {
      this.changeProduct(products.data[0].id);
    })
    .catch((err) => {
      console.log('Error retriving product List: ', err);
    });
  }

  handleProductChange(newProductId) {
    this.changeProduct(newProductId);
  }

  render() {
    if(this.state.isLoading) {
      return <div>Loading</div>
    }
    return (
      <div key={this.state.selectedProductId}>
        <Header />
        <Overview productId={this.state.selectedProductId} starRating={this.state.starRating} ratings={this.state.reviewMetaData.ratings} />
         RelatedItemsAndFit
        <RelatedItems productId={this.state.selectedProductId} handleProductChange={this.handleProductChange}/>
        <YourFit />
        <Ratings productId={this.state.selectedProductId}/>
        <QnA productID={this.state.selectedProductId}/>
        <Footer />
      </div>
    );
  }
};

export default App;
