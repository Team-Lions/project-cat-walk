import React from 'react';

//expents props: styles as an array of style objects, changeStyle as a function, selectedStyle as an object
var StyleSelector  = (props) => {
  //loop over the style array input from props
  //return html elements that display a thumbnail and have an onlick function.
  //Maybe also have their value or some other property equal to the array index or id.
  //if the style currently being mapped === selected style then overlay a checkmark
  var thumbnails = props.styles.map((style, index) => {
    if (style.style_id = props.style.style_id) {
      return <img class="styleThumbnail" title={index} src={style.photos[0].thumbnail_url} alt={style.name} onClick={props.changeStyle} style="border:red;"></img>
      //update style above to show a checkmark instead
    }
    return <img class="styleThumbnail" title={index} src={style.photos[0].thumbnail_url} alt={style.name} onClick={props.changeStyle}></img>
  });

}