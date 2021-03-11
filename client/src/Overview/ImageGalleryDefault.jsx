import React from 'react';
import styled, { css } from 'styled-components';

const GalleryThumbnail = styled.img`
  padding: 2px;
  :hover {
    cursor: pointer;
  }

  ${props => props.selected && css `
    border-bottom: 3px solid deepskyblue;
  `}
`;

const Thumbnails = styled.div`
  align-self: start;
  display: flex;
  flex-direction: column;
`;

const Gallery = styled.div`
  display: grid;
  grid-row-gap: 10px;
  grid-template-columns: 50px 35px 500px 30px;
  grid-template-rows: 590px;
  grid-column-gap: 10px;
  `;

const ScrollButton = styled.button`
  height: 20px;
  background-color: transparent;
  color: deepskyblue;
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
      mainImageWidth: '5px'
    };
  }

  nextImageRight(e) {
    this.setState({
      mainImageIndex: this.state.mainImageIndex + 1,
      mainImageHeight: '5px',
      mainImageWidth: '5px'
    });
  }

  nextImageLeft(e) {
    this.setState({
      mainImageIndex: this.state.mainImageIndex - 1,
      mainImageHeight: '5px',
      mainImageWidth: '5px'
    });
  }

  changeImage(index) {
    this.setState({
      mainImageIndex: index,
      mainImageHeight: '5px',
      mainImageWidth: '5px'
    });
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

  render() {
    var images = this.props.images.map((image, index) => {
      var selected = false;
      if (index === this.state.mainImageIndex) {
        selected = true;
      }
      return (
          <GalleryThumbnail selected={selected} src={image.thumbnail_url} alt="alternate image" onClick={() => {this.changeImage(index)}}></GalleryThumbnail>
      );
    })
    //for now only going to show at max 7 images and ignore the scrolling
    if(images.length > 7) {
      images = images.slice(0, 7);
    }
    return (
      <Gallery>
        <div style={{"gridColumn": 1}}>
          <Thumbnails>
            {images}
          </Thumbnails>
        </div>
        {this.state.mainImageIndex === 0 ?
          <div style={{"gridColumn": 2}}></div>
          :
          <ScrollButton style={{"gridColumn": 2}} onClick={this.nextImageLeft.bind(this)}><b>left</b></ScrollButton>
        }
        <img id="mainImage"
          style = {{"gridColumn": 3, "height": this.state.mainImageHeight, "width": this.state.mainImageWidth, "alignSelf": "center", "justifySelf": "center"}}
          src={this.props.images[this.state.mainImageIndex].thumbnail_url}
          alt={this.props.name}
          onLoad={this.setImageSize.bind(this)}></img>
        {this.state.mainImageIndex === (this.props.images.length - 1) ?
          <div style={{"gridColumn": 4}}></div>
          :
          <ScrollButton style={{"gridColumn": 4}} onClick={this.nextImageRight.bind(this)}><b>right</b></ScrollButton>
        }
      </Gallery>
    );
  }
};

export default ImageGalleryDefault;