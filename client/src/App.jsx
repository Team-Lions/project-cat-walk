import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Overview from './Overview/Overview.jsx';
<<<<<<< HEAD
import Ratings from './Ratings&Reviews/Ratings.jsx'
=======
import Rating from './Ratings&Reviews/rating.jsx';
import token from '../../public/token.js';
// ^^^^^^ update to where your token is until we figure out how we're doing tokens
>>>>>>> staging

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      selectedProductId: null,
      productInfo: {},
      reviewData: {},
      starRating: 0,
      productStyles: [],
      selectedStyle: {}
    }
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

  changeStyle(e) {
    //event handler function to be passed down to style selector.
    //when a new selection is made this will run and update the state as needed
  }

  //will probably need to update to be an event handler function for when a new product is selected
  changeProduct(productId, newState = {}) {
    newState.selectedProductId = productId;
    this.getProductInfo(productId)
    .then((productInfo) => {
      newState.productInfo = productInfo.data;
      return this.getReviewMetaData(newState.selectedProductId);
    })
    .then((reviewData) => {
      newState.reviewData = reviewData.data;
      //calculate average review
      var num = 0;
      var denom = 0;
      for (var k in newState.reviewData.ratings) {
        num += Number.parseInt(k);
        denom += Number.parseInt(newState.reviewData.ratings[k]);
      }
      //don't want to divide by 0 incase there are no reviews
      if (denom === 0) {
        denom = 1;
      }
      newState.starRating = num / denom;
      return this.getStyles(newState.selectedProductId);
    })
    .then((styleData) => {
      newState.productStyles = styleData.data.results;
      newState.selectedStyle = newState.productStyles[0];
      console.log('all data retrieved');
      this.setState(newState);
    })
    .catch((err) => {
      console.log('Error retriving data: ', err);
    })
  }

  componentDidMount() {
    //what does it mean "selects the page of results to return" in Products API page/do we even need to worry about that?
    //bascially the same as changing the selected product, but has to retrieve product list at the outset
    var newState = {};
    this.getProductList()
    .then((products) => {
      newState.productList = products.data;
      this.changeProduct(newState.productList[0].id, newState);
    })
    .catch((err) => {
      console.log('Error retriving product List: ', err);
    });
  }

  render() {
    console.log('state: ', this.state);
    return (
      <div>
<<<<<<< HEAD
        <Overview />
        <Ratings />
=======
        <Overview style={this.state.selectedStyle} productStyles={this.state.productStyles}/>
        <Rating />
>>>>>>> staging
      </div>
    );
  }
};

export default App;