import React from 'react';
import styled, { css } from 'styled-components';

const GalleryThumbnail = styled.img`
  height: 70px;
  padding: 2px;
  object-fit: cover;
  :hover {
    cursor: pointer;
  }

  ${props => props.selected && css `
    border-bottom: 3px solid deeppink;
  `}
`;

const Thumbnails = styled.div`
  grid-row: 2;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-content: space-around;
`;

const VerticalScrollButton = styled.button`
  background-color: transparent;
  color: deepskyblue;
  border: none;
  padding: 5px;
  :hover{
    color: deeppink;
  }
`;

const VerticalCarousel = styled.div`
  grid-column: 1;
  display: grid;
  grid-template-rows: 25px 530px 25px;
  grid-template-columns: 50px;
`;

const HorizScrollButton = styled.button`
  background-color: transparent;
  color: deepskyblue;
  border: none;
  padding: 5px;
  align-self: center;
  :hover{
    color: deeppink;
  }
`;

const Gallery = styled.div`
  display: grid;
  grid-row-gap: 10px;
  grid-template-columns: 55px 40px 520px 40px;
  grid-template-rows: 590px;
  grid-column-gap: 10px;
  `;


//expected props images (array of objects), name (String)
class ImageGalleryDefault extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      mainImageIndex: 0,
      mainImageHeight: '5px',
      mainImageWidth: '5px',
      thumbnailHeight: "70px",
      thumbnailWidth: "auto",
      carouselStart: 0,
      carouselEnd: -1,
      allThumbnails: []
    };
  }

  shiftCarousel(newMainImageIndex) {
    var newCarouselStart = this.state.carouselStart;
    var newCarouselEnd = this.state.carouselEnd;
    if (newMainImageIndex > newCarouselEnd) {
      newCarouselEnd = newMainImageIndex;
      newCarouselStart = newCarouselEnd - 6;
    } else if ( newMainImageIndex < newCarouselStart) {
      newCarouselStart = newMainImageIndex;
      newCarouselEnd = newCarouselStart + 6;
    }
    this.setState({
      mainImageIndex: newMainImageIndex,
      mainImageHeight: '5px',
      mainImageWidth: '5px',
      carouselStart: newCarouselStart,
      carouselEnd: newCarouselEnd
    });
  }

  nextImageRight(e) {
    var newMainImageIndex = this.state.mainImageIndex + 1;
    this.shiftCarousel(newMainImageIndex);
  }

  nextImageLeft(e) {
    var newMainImageIndex = this.state.mainImageIndex - 1;
    this.shiftCarousel(newMainImageIndex);
  }

  changeImage(index) {
    var newMainImageIndex = index;
    this.shiftCarousel(newMainImageIndex);
  }

  setImageSize(e) {
    if (e.target.naturalHeight >= e.target.naturalWidth) {
      this.setState({
        mainImageHeight: '590px',
        mainImageWidth: 'auto'
      });
    } else {
      this.setState({
        mainImageHeight: 'auto',
        mainImageWidth: '500px'
      });
    }
  }

  scrollUp() {
    this.setState({
      carouselStart: this.state.carouselStart - 1,
      carouselEnd: this.state.carouselEnd - 1
    });
  }

  scrollDown() {
    this.setState({
      carouselStart: this.state.carouselStart + 1,
      carouselEnd: this.state.carouselEnd + 1
    });
  }


  componentDidMount() {
    if (this.props.images.length >= 7) {
      var carouselEnd = 6;
    } else {
      var carouselEnd = this.props.images.length - 1;
    }

    var allThumbnails = this.props.images.map((image, index) => {
      return (
          <GalleryThumbnail selected={false} id={index} src={image.thumbnail_url} alt="alternate image" onClick={() => {this.changeImage(index)}} ></GalleryThumbnail>
      );
    });

    this.setState({
      carouselEnd: carouselEnd,
      allThumbnails: allThumbnails
    });
  }

  render() {
    var shownThumbnails = [];
    for (var i = this.state.carouselStart; i <= this.state.carouselEnd; i++) {
      if (i === this.state.mainImageIndex) {
        shownThumbnails.push(
          <GalleryThumbnail selected={true} id={i} src={this.props.images[i].thumbnail_url} alt="alternate image" ></GalleryThumbnail>
        );
      } else {
        shownThumbnails.push(this.state.allThumbnails[i]);
      }
    }

    return (
      <Gallery>
        <VerticalCarousel>
            {this.state.carouselStart === 0 ?
              <div style={{"gridRow": 1}}></div>
              :
              <VerticalScrollButton style={{"gridRow": 1}} onClick={this.scrollUp.bind(this)}><i class="fas fa-angle-up fa-lg" style={{"alignSelf": "end"}}></i></VerticalScrollButton>
            }
            <Thumbnails>
              {shownThumbnails}
            </Thumbnails>
            {this.state.carouselEnd < (this.props.images.length - 1) ?
              <VerticalScrollButton style={{"gridRow": 3}} onClick={this.scrollDown.bind(this)}><i class="fas fa-angle-down fa-lg" style={{"alignSelf": "start"}}></i></VerticalScrollButton>
              :
              <div style={{"gridRow": 3}}></div>
            }
        </VerticalCarousel>
        {this.state.mainImageIndex === 0 ?
          <div style={{"gridColumn": 2}}></div>
          :
          <HorizScrollButton style={{"gridColumn": 2, "justifySelf": "start"}} onClick={this.nextImageLeft.bind(this)}><i class="fas fa-angle-left fa-5x"></i></HorizScrollButton>
        }
        <img id="mainImage"
          style = {{"gridColumn": 3, "height": this.state.mainImageHeight, "width": this.state.mainImageWidth, "alignSelf": "center", "justifySelf": "center"}}
          src={this.props.images[this.state.mainImageIndex].thumbnail_url}
          alt={this.props.name}
          onLoad={this.setImageSize.bind(this)}></img>
        {this.state.mainImageIndex === (this.props.images.length - 1) ?
          <div style={{"gridColumn": 4}}></div>
          :
          <HorizScrollButton style={{"gridColumn": 4, "justifySelf": "end"}} onClick={this.nextImageRight.bind(this)}><i class="fas fa-angle-right fa-5x"></i></HorizScrollButton>
        }
      </Gallery>
    );
  }
};

export default ImageGalleryDefault;