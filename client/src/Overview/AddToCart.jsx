import React from 'react';
import SizeSelector from './SizeSelector.jsx';
import QuantitySelector from './QuantitySelector.jsx';
import axios from 'axios';
import token from '../../../public/token.js';
import styled, { css } from 'styled-components';

const Button = styled.button`
  height: 30px;
  width: 150px;
  margin: 5px
`;

class AddToCart extends React.Component {
  //expects props to contain object called skus
  constructor(props) {
    super(props);
    this.state = {
      sizeSelection: '',
      quantityEnabled: false,
      quantityAvailable: 0,
      quantitySelection: null,
      hideSizeEnforcement: true,
      addedToCart: 0
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
      quantityAvailable: this.props.sizeFirstSkus[newSize].quantity,
      quantitySelection: 1,
      hideSizeEnforcement: true
    });
  }

  changeQuantity(e) {
    var newQuantity = e.target.value;
    this.setState({
      quantitySelection: newQuantity
    });
  }

  enforceSizeSelection(e) {
    this.setState({
      hideSizeEnforcement: false
    });
  }

  addToCart(e) {
    var sku_id = Number.parseInt(this.props.sizeFirstSkus[this.state.sizeSelection].sku_id);
    axios({
      method: 'post',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hratx/cart',
      data: {
        sku_id: sku_id,
        count: this.state.quantitySelection
      },
      headers: {
        'Authorization': token
      }
    })
    .then(() => {
      this.setState({
        sizeSelection: '',
        quantityEnabled: false,
        quantityAvailable: 0,
        quantitySelection: null,
        hideSizeEnforcement: true,
        addedToCart: !this.state.addedToCart
      });
    })
    .catch((err) => {
      console.log('error');
      throw err;
    });
  }

  render() {
    return (
      <div key={this.state.addedToCart}>
        <div hidden={this.state.hideSizeEnforcement}>Please select a size!</div>
        {this.props.sizes.length === 0 ?
          <select id="size" name="size" disabled>
            <option>OUT OF STOCK</option>
          </select>
          :
          <SizeSelector sizes={this.props.sizes} change={this.changeSize.bind(this)}/>
        }
        {this.state.quantityEnabled ?
          <QuantitySelector quantityAvailable={this.state.quantityAvailable} change={this.changeQuantity.bind(this)} />
          :
          <select style={{height: '30px', width: '40px', margin: '5px'}} id="quantity" name="quantity" disabled>
            <option> - </option>
          </select>
        }
        {this.props.sizes.length > 0 ?
          this.state.sizeSelection === "" ?
            /* there is quantity, but size is not selected. Button opens dropdown display message */
            <Button onClick={this.enforceSizeSelection.bind(this)}>Add to Cart</Button>
            :
            /* quantity and size selected. Button adds to cart */
            <Button onClick={this.addToCart.bind(this)}>Add to Cart</Button>
          :
          /* hide button */
          <Button style={{visibility: 'hidden'}}>Add to Cart</Button>
        }
      </div>
    )
  }
};

export default AddToCart;