import React from 'react';
import SizeSelector from './SizeSelector.jsx';
import QuantitySelector from './QuantitySelector.jsx';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: props.style,
      sizes: ['s', 'm', 'l'],
      sizeSelection: '',
      quantityEnabled: false,
      quantities: [1, 2, 3, 4],
      quantitySelection: null
    };
  }

  getStyleData() {
    //ajax request to get all the relevent data for the selected style
    // ^ see if it's possible to do something else that allows this to return a promise. Will axios work here?
  }

  //Size functions
  changeSize(e) {
    var newSize = e.target.value;
    this.setState({
      sizeSelection: newSize,
      quantityEnabled: true
    });
  }

  parseAvailableSizes(data) {
    //looks through style data to populate an array of available sizes
    //returns an array, but does not set the state
  }

  //Quantity Functions
  changeQuantity(e) {
    var newQuantity = e.target.value;
    this.setState({
      quantitySelection: newQuantity
    });
  }

  parseStock() {
    //creates an array of integers of wither 1 - total number of stock, or 1-15 if the total number of stock is above 15
    //is dependent on size being selected
    //returns array, but does not set the state
  }

  addToCart(event) {
    //event handler passed into the button
    //will have different functionality based on the current state
  }

  // componentDidMount() {
  //   //gets data on current style. Upon success renders the following:
  //   //Size Selector -
  //     //invoke parseAvailableSizes
  //     //if return.length === 0 then set state to selection = "OUT OF STOCK", make dropdown inactive
  //     //else set state to selection = "Select Size", sizes = return of parseAvailableSizes call
  //   //Won't have to do anything with QuantitySelector, since it's defaults are to be inactive until a size is selected
  // }

  render() {
    //invokes :
    //SizeSelector
    //QuantitySelector (conditional rendering based on state.quantityEnabled)
    //renders an add to cart button that is dependent on current selection
    return (
      <div>
        <SizeSelector sizes={this.state.sizes} change={this.changeSize.bind(this)}/>
        <QuantitySelector quantities={this.state.quantities} change={this.changeQuantity.bind(this)}/>
      </div>
    )
  }
};

export default AddToCart;