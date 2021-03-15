//libraries
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
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

//import appCss from './App.css';
import css from './App.css';
import Spinner from 'react-bootstrap/Spinner'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProductId: null,
      reviewMetaData: {},
      starRating: 0,
      isLoading: true,
      cartCount: 0
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

  updateCart(quantity) {
    let newCount = this.state.cartCount + Number.parseInt(quantity);
    this.setState({
      cartCount: newCount
    });
  }

  render() {
    if(this.state.isLoading) {
      return (
        <>
          <div className="loading">
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
            <br/>
            <div>
              <h1>Loading Lion's Den Apparel</h1>
            </div>
            <h2>🦁</h2>
          </div>
        </>
    )
    }
    return (
      <div key={this.state.selectedProductId}>
        <Header cartCount={this.state.cartCount} handleProductChange={this.handleProductChange}/>
        <Overview productId={this.state.selectedProductId} starRating={this.state.starRating} ratings={this.state.reviewMetaData.ratings} updateCart={this.updateCart.bind(this)} cartCount={this.state.cartCount}/>
        <RelatedItems productId={this.state.selectedProductId} handleProductChange={this.handleProductChange}/>
        <YourFit productId={this.state.selectedProductId}/>
        <QnA productID={this.state.selectedProductId}/>
        <Ratings productId={this.state.selectedProductId} metaData={this.state.reviewMetaData} starRating={this.state.starRating}/>
        <Footer />
      </div>
    );
  }
};

export default App;
