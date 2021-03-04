import React from 'react';
import SizeSelector from './SizeSelector.jsx';
import QuantitySelector from './QuantitySelector.jsx';

class AddToCart extends React.Component {
  //expects props to contain object called skus
  constructor(props) {
    super(props);
    this.state = {
      sizeFirstSkus: {},
      sizes: [],
      sizeSelection: '',
      quantityEnabled: false,
      quantityAvailable: 0,
      quantitySelection: null
    };
  }

  changeSize(e) {
    // if this is the first slection away formthe default, remove "Select Size as an option"
    if(document.getElementById('size').options[0].value === 'Select Size') {
      document.getElementById('size').remove(0);
    }
    var newSize = e.target.value;
    document.getElementById('quantity').value = 1;
    this.setState({
      sizeSelection: newSize,
      quantityEnabled: true,
      quantityAvailable: this.state.sizeFirstSkus[newSize].quantity,
      quantitySelection: 1
    });
  }

  changeQuantity(e) {
    var newQuantity = e.target.value;
    this.setState({
      quantitySelection: newQuantity
    });
  }

  addToCart(e) {
    //event handler passed into the button
    //will have different functionality based on the current state
  }

  componentDidMount() {
    //populates sizeFirstSkus and sizes objects
    var sizeFirstSkus = {};
    var size, quantity;
    for (var k in this.props.skus) {
      size = this.props.skus[k].size;
      quantity = this.props.skus[k].quantity;
      sizeFirstSkus[size] = {
        skuId: k,
        quantity: quantity
      };
    }
    this.setState({
      sizeFirstSkus: sizeFirstSkus,
      sizes: Object.keys(sizeFirstSkus)
    });
  }

  render() {
    return (
      <div>
        {this.state.sizes.length === 0 ?
          <select id="size" name="size" disabled>
            <option>OUT OF STOCK</option>
          </select>
          :
          <SizeSelector sizes={this.state.sizes} change={this.changeSize.bind(this)}/>
        }
        {this.state.quantityEnabled ?
          <QuantitySelector quantityAvailable={this.state.quantityAvailable} change={this.changeQuantity.bind(this)}/>
          :
          <select id="quantity" name="quantity" disabled>
            <option>-</option>
          </select>
        }
        {/*button goes here*/}
      </div>
    )
  }
};

export default AddToCart;