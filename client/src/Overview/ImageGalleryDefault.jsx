import React from 'react';
import styled, { css } from 'styled-components';

const GalleryThumbnail = styled.img`
  padding: 2px;
  :hover {
    cursor: pointer;
  }

  ${props => props.selected && css `
    border-bottom: 3px solid deeppink;
  `}
`;

const Thumbnails = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
`;

const Gallery = styled.div`
  display: grid;
  grid-row-gap: 10px;
  grid-template-columns: 55px 40px 520px 40px;
  grid-template-rows: 590px;
  grid-column-gap: 10px;
  `;

const ScrollButton = styled.button`
  background-color: transparent;
  color: deepskyblue;
  border: none;
  padding: 5px;
  align-self: center;
  :hover{
    color: deeppink;
  }
`;

//expected props images (array of objects), name (String)
class ImageGalleryDefault extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      mainImageIndex: 0,
      mainImageHeight: '5px',
      mainImageWidth: '5px',
      carouselStart: 0,
      carouselEnd: 0
    };
  }

  shiftCarousel(newMainImageIndex) {
    var newCarouselStart = this.state.carouselStart;
    var newCarouselEnd = this.state.carouselEnd;
    if (newMainImageIndex > newCarouselEnd) {
      newCarouselEnd = newMainImageIndex + 1;
      newCarouselStart = newCarouselEnd - 6;
    } else if ( newMainImageIndex < newCarouselStart) {
      newCarouselStart = newMainImageIndex - 1;
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
      this.setState({
        carouselEnd: 6
      });
    } else {
      this.setState({
        carouselEnd: this.props.images.length - 1
      });
    }
  }

  render() {
    var thumbnails = this.props.images.map((image, index) => {
      var selected = false;
      if (index === this.state.mainImageIndex) {
        selected = true;
      }
      return (
          <GalleryThumbnail selected={selected} src={image.thumbnail_url} alt="alternate image" onClick={() => {this.changeImage(index)}}></GalleryThumbnail>
      );
    })
    console.log("start: ", this.state.carouselStart);
    console.log('end: ', this.state.carouselEnd);
    var shownThumbnails = thumbnails.slice(this.state.carouselStart, this.state.carouselEnd + 1)
    console.log('num images: ', this.props.images.length);
    return (
      <Gallery>
        <div style={{"gridColumn": 1}}>
          <Thumbnails>
            {this.state.carouselStart === 0 ?
              <div></div>
              :
              <button onClick={this.scrollUp.bind(this)}><i class="fas fa-caret-up"></i></button>
            }
            {shownThumbnails}
            {this.state.carouselEnd < (this.props.images.length - 1) ?
              <button onClick={this.scrollDown.bind(this)}><i class="fas fa-caret-down"></i></button>
              :
              <div></div>
            }
          </Thumbnails>
        </div>
        {this.state.mainImageIndex === 0 ?
          <div style={{"gridColumn": 2}}></div>
          :
          <ScrollButton style={{"gridColumn": 2, "justifySelf": "start"}} onClick={this.nextImageLeft.bind(this)}><i class="fas fa-angle-left fa-5x"></i></ScrollButton>
        }
        <img id="mainImage"
          style = {{"gridColumn": 3, "height": this.state.mainImageHeight, "width": this.state.mainImageWidth, "alignSelf": "center", "justifySelf": "center"}}
          src={this.props.images[this.state.mainImageIndex].thumbnail_url}
          alt={this.props.name}
          onLoad={this.setImageSize.bind(this)}></img>
        {this.state.mainImageIndex === (this.props.images.length - 1) ?
          <div style={{"gridColumn": 4}}></div>
          :
          <ScrollButton style={{"gridColumn": 4, "justifySelf": "end"}} onClick={this.nextImageRight.bind(this)}><i class="fas fa-angle-right fa-5x"></i></ScrollButton>
        }
      </Gallery>
    );
  }
};

export default ImageGalleryDefault;