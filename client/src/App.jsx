import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import calculateStarReview from './calculateStarReview.js';
import Overview from './Overview/Overview.jsx';
import Rating from './Ratings&Reviews/rating.jsx';
import token from '../../public/token.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProductId: null,
      reviewData: {},
      starRating: 0
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
    this.getReviewMetaData(newState.selectedProductId)
    .then((reviewData) => {
      newState.reviewData = reviewData.data;
      newState.starRating = calculateStarReview(newState.reviewData.ratings);
      console.log('all App data retrieved');
      this.setState(newState);
    })
    .catch((err) => {
      console.log('Error retriving data: ', err);
    });
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

  render() {
    console.log('state: ', this.state);
    return (
      <div>
        <Overview style={this.state.selectedStyle} productStyles={this.state.productStyles}/>
        <Rating />
      </div>
    );
  }
};

export default App;