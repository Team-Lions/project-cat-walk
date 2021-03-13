import React from 'react';

var SizeSelector = (props) => {
  //returns a drop down form of available sizes
  //expects props of available sizes array and onchange function
  let listOptions = props.sizes.map((item) => {
    return <option key={item} value={item}>{item}</option>
  });
  return (
    <select style={{height: '30px', width: '125px', margin: '5px'}}id="size" name="size" onChange={props.change}>
      <option value="Select Size">Select Size</option>
      {listOptions}
    </select>

  );
};

export default SizeSelector;