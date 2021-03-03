import React from 'react';

var SizeSelector = (props) => {
  //returns a drop down form of available sizes
  //expects props of available sizes array and onchange function
  let listOptions = props.sizes.map((item) => {
    return <option value={item}>{item}</option>
  });
  return (
    <div>
      <label id="size">Size: </label>
      <select id="size" name="size" onChange={props.change}>
        {listOptions}
      </select>
    </div>
  );
};

export default SizeSelector;