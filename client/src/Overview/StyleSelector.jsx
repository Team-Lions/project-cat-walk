import React from 'react';
import styled, { css } from 'styled-components';

const SelectorFlexContainer = styled.div`
  width: 345px;
  display: flex;
  align-items: center;
  justify-content: right;
  flex-flow: row wrap;
`;

const StyleThumbnail = styled.img`
  border-radius: 50%;
  height: 65px;
  width: 65px;
  object-fit: cover;
  margin: 10px;
  :hover {
    cursor: pointer;
  }

  ${props => props.selected && css `
    border: 3px solid deeppink;
  `}
`;

//expects props: styles as an array of style objects, changeStyle as a function, selectedStyle as an object
var StyleSelector  = (props) => {
  var thumbnails = props.styles.map((style, index) => {
    var selected = false;
    if (style.name === props.selectedStyle.name) {
      selected = true;
      //update style above to show a checkmark instead
    }
    return <StyleThumbnail selected={selected} src={style.photos[0].thumbnail_url} alt={style.name} onClick={() => {props.changeStyle(index)}}></StyleThumbnail>
  });
  return (
    <div>
      <p><b>Style > </b>{props.selectedStyle.name}</p>
      <SelectorFlexContainer>
        {thumbnails}
      </SelectorFlexContainer>
    </div>
  );
}

export default StyleSelector;