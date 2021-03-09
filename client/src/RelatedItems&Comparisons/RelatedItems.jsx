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


//WE NEED CONTENT LOADERS IN OUR WEBPACK CONFIG AND PACKAGE JSON

class RelatedItems extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      relatedItems: [],
      relatedItemsLoaded: false,
      relatedProductsInfo: [],
      relatedProductsImg: []
    }

    // carousel resizing
    this.responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    }
    this.handleCardClick = this.handleCardClick.bind(this);
  };

  componentDidMount() {
    this.getRelatedItems()
  }

  getRelatedItems() {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/${this.props.productId}/related`, {
      headers: {
        Authorization: token
      }
    })
    .then((relatedItems) => {
      let relatedItemsArray = relatedItems.data;
      this.getRelatedItemsInfo(relatedItemsArray);
    })
    .then(() => {

    })
    .catch((err) => {
      console.log(err)
    })
  }

  getRelatedItemsInfo(relatedItemsList) {
    let products = [];
    for (let i = 0; i < relatedItemsList.length; i++) {
      let productSearchId = relatedItemsList[i];
      let singleProduct = {}
      axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/${productSearchId}`, {
        headers: {
          Authorization: token
        }
      })
      .then((productInfo) => {
        singleProduct.id = productInfo.data.id
        singleProduct.name = productInfo.data.name
        singleProduct.category = productInfo.data.category
        singleProduct.price = productInfo.data.default_price
        return singleProduct
      })
      .then((productDetails) => {
        axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/${productSearchId}/styles`, {
          headers: {
            Authorization: token
          }
        })
        .then((styles) => {
          let imgs = styles.data.results[0].photos
          productDetails.images = imgs
          return productDetails;
        })
        .then((product) => {
          products.push(product)
        })
        .then(() => {
          this.setState({
            relatedProductsInfo: products
          })
        })
        .catch((err) => {
          console.log(err)
        })
      })
      .catch((err) => {
        console.log(err)
      });
    }
  }

  handleCardClick(e) {
    e.preventDefault();
    console.log('Hello World!');
  }

  render() {
    return (
      <div id="related-items">
        <h4 id="related-title">
          Related Items
        </h4>
        <Carousel responsive={this.responsive}>
          {this.state.relatedProductsInfo.map((item) => {
            return (
              <div id="carousel-item">
                 <Card border="dark" style={{ width: '16rem', height: '22rem'}}>
                  <AddToYourFit />
                  <Card.Img variant="top" src={item.images[0].thumbnail_url ? item.images[0].thumbnail_url : placeHolderImg} height="auto" width="100%"/>
                  <Card.Body onClick={this.handleCardClick}>
                    <Card.Subtitle className="mb-2 text-muted">
                      {item.category}
                    </Card.Subtitle>
                    <Card.Title>
                      {item.name}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {item.price}
                    </Card.Subtitle>
                    <Card.Text>
                      ★★★★★
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            )
          })}
        </Carousel>
      </div>
    )
  }
};

export default RelatedItems;