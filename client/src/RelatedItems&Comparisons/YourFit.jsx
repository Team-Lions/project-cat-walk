import React from 'react';
import Carousel from 'react-multi-carousel';
import placeHolderImg from './content/placeholderimg.jpeg';
import Card from 'react-bootstrap/Card';
import ReactStarRating from "react-star-ratings-component";

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
  }


  render() {
    return (
      <div id="your-fit">
        <h4 id="yourfit-title">
          Your Outfit
        </h4>
        <div>
        <Carousel responsive={this.responsive}>
          <Card border="dark" bg="dark" style={{ width: '16rem', height: '23rem'}}>
            <button id='add-button'><span>&#43;</span></button>
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
        </Carousel>
        </div>
      </div>
    )
  }
};

export default YourFit;