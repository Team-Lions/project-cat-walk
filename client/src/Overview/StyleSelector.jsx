import React from 'react';

//expects props: styles as an array of style objects, changeStyle as a function, selectedStyle as an object
var StyleSelector  = (props) => {
  var thumbnails = props.styles.map((style, index) => {
    if (style.name === props.selectedStyle.name) {
      return <img id="selectedStyle" className='styleSelector' title={index} src={style.photos[0].thumbnail_url} alt={style.name} onClick={props.changeStyle} ></img>
      //update style above to show a checkmark instead
    }
    return <img className='styleSelector' title={index} src={style.photos[0].thumbnail_url} alt={style.name} onClick={props.changeStyle}></img>
  });
  return (
    <div>
      <p><b>Style: </b>{props.selectedStyle.name}</p>
      {thumbnails}
    </div>
  );
}

export default StyleSelector;