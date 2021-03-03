import React from 'react';

var QuantitySelector = (props) => {
  //expects as array of integers, and onchange function
  //renders a dropdown with the array values as options
  let listOptions = props.quantities.map((item) => {
    return <option value={item}>{item}</option>
  });
  return (
    <div>
      <label id="quantity">Quantity:</label>
      <select id="quantity" name="quantity" onChange={props.change}>
        {listOptions}
      </select>
    </div>
  );
};


export default QuantitySelector;