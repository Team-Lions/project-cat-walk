import React from 'react';
import styled, { css } from 'styled-components';

const GalleryThumbnail = styled.img`
  height: 7%;
  width: 7%;
  padding: 2px;

  ${props => props.selected && css `
    border-bottom: 3px solid black;
  `}
`;

//expected props images (array of objects), name (String)
class ImageGalleryDefault extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      mainImageIndex: 0
    }
  }

  nextImageRight(e) {
    this.setState({
      mainImageIndex: this.state.mainImageIndex + 1
    });
  }

  nextImageLeft(e) {
    this.setState({
      mainImageIndex: this.state.mainImageIndex - 1
    });
  }

  changeImage(index) {
    this.setState({
      mainImageIndex: index
    });
  }

  render() {
    var images = this.props.images.map((image, index) => {
      var selected = false;
      if (index === this.state.mainImageIndex) {
        selected = true;
      }
      return (
        <li>
          <GalleryThumbnail selected={selected} src={image.thumbnail_url} alt="alternate image" onClick={() => {this.changeImage(index)}}></GalleryThumbnail>
        </li>
      );
    })
    return (
      <div>
        {this.state.mainImageIndex === 0 ?
          <div></div>
          :
          <button onClick={this.nextImageLeft.bind(this)}><b>left</b></button>
        }
        <img id="mainImage" src={this.props.images[this.state.mainImageIndex].thumbnail_url} alt={this.props.name}></img>
        {this.state.mainImageIndex === (this.props.images.length - 1) ?
          <div></div>
          :
          <button onClick={this.nextImageRight.bind(this)}><b>right</b></button>
        }
        <ul>{images}</ul>
      </div>
    );
  }
};

export default ImageGalleryDefault;