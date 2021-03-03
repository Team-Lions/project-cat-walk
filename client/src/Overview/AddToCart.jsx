import React from 'react';
import SizeSelector from './SizeSelector.jsx';
import QuantitySelector from './QuantitySelector.jsx';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: props.style,
      sizes: [],
      sizeSelection: '',
      quantityEnabled: false,
      quantityAvailable: null,
      quantitySelection: null
    };
  }

  changeSizeSelection(event) {
    //event handler for a new size selection
    //gets passed into the sizeSelector functional Component
    //updates state.sizeSelection
    //changes quantityEnabled to true
  }

  getStyleData() {
    //ajax request to get all the relevent data for the selected style
    // ^ see if it's possible to do something else that allows this to return a promise. Will axios work here?
  }

  parseAvailableSizes(data) {
    //looks through style data to populate an array of available sizes
    //returns an array, but does not set the state
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

  componentDidMount() {
    //gets data on current style. Upon success renders the following:
    //Size Selector -
      //invoke parseAvailableSizes
      //if return.length === 0 then set state to selection = "OUT OF STOCK", make dropdown inactive
      //else set state to selection = "Select Size", sizes = return of parseAvailableSizes call
    //Won't have to do anything with QuantitySelector, since it's defaults are to be inactive until a size is selected
  }

  render() {
    //invokes :
    //SizeSelector
    //QuantitySelector (conditional rendering based on state.quantityEnabled)

    //renders an add to cart button that is dependent on current selection
  }
};