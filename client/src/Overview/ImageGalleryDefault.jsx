import React from 'react';

//expected props images (array of objects), name (String)
class ImageGalleryDefault extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      mainImageIndex: 0
    }
  }

  nextImageRight(e) {

  }

  nextImageLeft(e) {

  }

  changeImage(e) {

  }

  render() {
    var images = this.props.images.map((image, index) => {
      return (
        <li  title={index}>
          <img className="imageGalleryList" src={image.thumbnail_url} alt="alternate image"></img>
        </li>
      );
    })
    return (
      <div>
        <img id="mainImage" src={this.props.images[this.state.mainImageIndex].thumbnail_url} alt={this.props.name}></img>
        <ul>{images}</ul>
      </div>
    );
  }
};

export default ImageGalleryDefault;