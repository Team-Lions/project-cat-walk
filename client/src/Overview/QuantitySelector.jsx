import React from 'react';
import _ from 'underscore';

var QuantitySelector = (props) => {
  //expects an integer, and onchange function
  //renders a dropdown with the array values as options
  if (props.quantityAvailable >= 15){
    var quantities = _.range(1, 16);
  } else {
    var quantities = _.range(1, props.quantityAvailable + 1);
  }
  var listOptions = quantities.map((item) => {
    return <option value={item}>{item}</option>
  });
  return (
    <select style={{height: '30px', width: '40px', margin: '5px'}} id="quantity" name="quantity" onChange={props.change}>
      {listOptions}
    </select>
  );
};


export default QuantitySelector;