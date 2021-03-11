// Libraries and dependencies
import React from 'react';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import Card from 'react-bootstrap/Card';
// Styling
import "react-multi-carousel/lib/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// Misc.
import AddToYourFit from './AddToYourFit.jsx';
import token from '../../../public/token.js';
import placeHolderImg from './content/placeholderimg.jpeg';
// Helper Fn's
import CardFormatter from './CardFormatter.jsx';

class RelatedItems extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      relatedProductsDetails: [],
      isLoaded: false
    }

    // carousel resizing
    this.responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    }

    this.handleCardClick = this.handleCardClick.bind(this);
  };

  componentDidMount() {
    this._getRelatedItems(this.props.productId)
      .then((relatedItems) => {
        let searchIds = relatedItems.data
        let results = searchIds.map((id) => {
          return Promise.all(this._getRelatedItemData(id));
        })
        return Promise.all(results)
      })
      .then((productData) => {
        this.setState({relatedProductsDetails: productData})
      })
      .then(() => {
        this.setState({isLoaded: true})
      })
      .catch((err) => {
        console.log(err)
      })
  }

  // Get related items <-- 1st request
  _getRelatedItems(productId) {
    return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/${productId}/related`, {
      headers: {
        Authorization: token
      },
      params: {
        product_id: productId
      }
    })
  }

  // Gets all related items data in parallel
  _getRelatedItemData(searchId) {
    let getData = [this._getRelatedItemDetails(searchId), this._getRelatedItemImages(searchId), this._getRelatedItemReviews(searchId)];
    return getData;
  }

  _getRelatedItemDetails(searchId) {
    return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/${searchId}`, {
      headers: {
        Authorization: token
      },
      params: {
        id: searchId
      }
    })
  }

  _getRelatedItemImages(searchId) {
    return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/${searchId}/styles`, {
      headers: {
        Authorization: token
      },
      params: {
        product_id: searchId
      }
    })
  }

  _getRelatedItemReviews(searchId) {
    return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/reviews/meta`, {
      headers: {
        Authorization: token
      },
      params: {
        product_id: searchId
      }
    })
  }

  handleCardClick(e) {
    e.preventDefault();
    let id = e.target.id;
    let overviewChanger = this.props.handleProductChange;
    overviewChanger(id);
  }

  render() {
    return (
      <div id="related-items">
        <h4 id="related-title">
          Related Items
        </h4>
        {this.state.isLoaded ?
        <Carousel responsive={this.responsive}>
          {this.state.relatedProductsDetails.map((itemDetails) => (
            <CardFormatter productDetails={itemDetails} handleClick={this.handleCardClick}/>
          ))}
        </Carousel> :
        'Loading...'}
        {/* <Carousel responsive={this.responsive}>
          {this.state.relatedProductsDetails.map((itemDetails) => (
            <CardFormatter id={itemDetails[0].data.id} image={itemDetails[1].data.results[0].photos[0].thumnail_url} placeHolderImg={placeHolderImg} category={itemDetails[0].data.category} name={itemDetails[0].data.name} price={itemDetails[0].data.default_price} rating={'rating'} handleClick={this.handleCardClick} key={itemDetails[0].data.id}/>
          ))}
        </Carousel> */}
      </div>
    )
  }
};

export default RelatedItems;

//(item.id, item.images, placeHolderImg, item.category, item.name, item.price, 'rating', this.handleCardClick)