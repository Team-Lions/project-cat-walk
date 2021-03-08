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
    return (
      <img id="mainImage" src={this.props.images[this.state.mainImageIndex].thumbnail_url} alt={this.props.name}></img>
    );
  }
};

export default ImageGalleryDefault;