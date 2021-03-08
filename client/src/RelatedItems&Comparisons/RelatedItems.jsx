import React from 'react';
import axios from 'axios';
//import SingleRelatedItem from './SingleRelatedItem.jsx';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import token from '../../../public/token.js';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import placeHolderImg from './content/placeholderimg.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';


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
      this.getRelatedItemsInfo(relatedItemsArray)
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
      axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/${productSearchId}`, {
        headers: {
          Authorization: token
        }
      })
      .then((productInfo) => {
        products.push(productInfo.data)
        console.log(productInfo.data)
      })
      .then(() => {
        this.setState({
          relatedProductsInfo: products
        })
      })
      .catch((err) => {
        console.log(err)
      });
    }
  }

  getRelatedItemsImg(relatedItemsList) {
    let imgs = [];
    for (let i = 0; i < relatedItemsList.length; i++) {
      let productSearchId = relatedItemsList[i];
      axiost.get()
    }
  }

  render() {
    return (
      <div>
        <h4>
          Related Items
        </h4>
        <Carousel responsive={this.responsive}>
          {this.state.relatedProductsInfo.map((item) => {
            return (
              <div>
                 <Card border="dark" style={{ width: '16rem', height: '18rem'}}>
                  <Card.Img variant="top" src={placeHolderImg}/>
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                      {item.category}
                    </Card.Subtitle>
                    <Card.Title>
                      {item.name}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {item.default_price}
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