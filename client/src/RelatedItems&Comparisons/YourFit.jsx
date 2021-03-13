import React from 'react';
import Carousel from 'react-multi-carousel';
import placeHolderImg from './content/placeholderimg.jpeg';
import Card from 'react-bootstrap/Card';
import ReactStarRating from "react-star-ratings-component";
import axios from 'axios';
import token from '../../../public/token.js';
import YourOutfitCardFormatter from './YourOutfitCardFormatter.jsx';
import StockCard from './StockCard.jsx';

class YourFit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      favorites: []
    }

    this.responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2
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

    this.addToFavorites = this.addToFavorites.bind(this);
    this.handleRemoveCard = this.handleRemoveCard.bind(this);
  }

  addToFavorites(e) {
    e.preventDefault();
    if (this.state.favorites.length) {
      for (var i = 0; i < this.state.favorites.length; i++) {
        if (this.state.favorites[i][0].data.id === this.props.id) {
          alert('Already in cart')
          break;
        }
        return null
      }
    }
    return Promise.all(this._getRelatedItemData(this.props.productId))
      .then((productData) => {
        this.setState({
          favorites: [...this.state.favorites, ...[productData]]
        })
      })
      .then(() => {
        window.sessionStorage.setItem('favorites', this.state.favorites);
      })
      .catch((err) => {
        console.log(err)
      });
  }

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

  handleRemoveCard(e) {
    e.preventDefault();
    let id = e.target.className;
    let remainingOutfits = this.state.favorites.filter(item => item[0].data.id === id);
    console.log(remainingOutfits);
    this.setState({
      favorites: remainingOutfits
    });
  }

  render() {
    return (
      <div id="your-fit">
        <h5 id="yourfit-title">
          Your Outfit
        </h5>
        <div>
        <StockCard favButton={this.addToFavorites}/>
        <div id='yourfit-carousel'>
          <Carousel responsive={this.responsive}>
            {this.state.favorites ?
            this.state.favorites.map((itemDetails) => (
              <YourOutfitCardFormatter productDetails={itemDetails} handleClick={this.handleRemoveCard}/>
            )):
              ''
            }
          </Carousel>
        </div>
        </div>
      </div>
    )
  }
};

export default YourFit;