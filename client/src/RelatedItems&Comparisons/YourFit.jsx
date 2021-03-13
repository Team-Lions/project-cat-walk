import React from 'react';
import Carousel from 'react-multi-carousel';
import placeHolderImg from './content/placeholderimg.jpeg';
import Card from 'react-bootstrap/Card';
import ReactStarRating from "react-star-ratings-component";
import axios from 'axios';
import token from '../../../public/token.js';
import CardFormatter from './CardFormatter.jsx';

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
        items: 3
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
  }

  addToFavorites(e) {
    e.preventDefault();
    return Promise.all(this._getRelatedItemData(this.props.productId))
      .then((productData) => {
        this.setState({
          favorites: [...this.state.favorites, ...[productData]]
        })
      })
      .then(()=>{
        console.log(this.state.favorites)
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

  render() {
    return (
      <div id="your-fit">
        <h5 id="yourfit-title">
          Your Outfit
        </h5>
        <div>
        <Carousel responsive={this.responsive}>
          <Card border="info" bg="whitesmoke" style={{ width: '16rem', height: '23rem'}}>
            <button id='add-button' onClick={this.addToFavorites}><span>&#43;</span></button>
              <img className="carousel-img" src={placeHolderImg}></img>
              <Card.Body className="text-center">
                <Card.Subtitle className="mb-2 text-muted">
                  Click to
                </Card.Subtitle>
                <Card.Title>
                  Add
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Items
                </Card.Subtitle>
                <ReactStarRating
                    numberOfStar={5}
                    numberOfSelectedStar={5}
                    colorFilledStar="deeppink"
                    colorEmptyStar="black"
                    starSize="15px"
                />
              </Card.Body>
          </Card>
          {this.state.favorites ?
          this.state.favorites.map((itemDetails) => (
            <CardFormatter productDetails={itemDetails} handleClick={null}/>
          )):
            ''
          }
        </Carousel>
        </div>
      </div>
    )
  }
};

export default YourFit;