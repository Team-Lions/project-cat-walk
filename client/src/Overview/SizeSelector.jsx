import React from 'react';

var SizeSelector = (props) => {
  //returns a drop down form of available sizes
  //expects props of available sizes array and onchange function
  let listOptions = props.sizes.map((item) => {
    return <option value={item}>{item}</option>
  });
  return (
    <select id="size" name="size" onChange={props.change}>
      <option value="Select Size">Select Size</option>
      {listOptions}
    </select>

  );
};

export default SizeSelector;