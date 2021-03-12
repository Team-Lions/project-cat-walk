import React from 'react';
import NavBar from './NavBar.jsx';
import Search from './Search.jsx';
import styled, { css } from 'styled-components';

const Container = styled.header`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 5px;
`;

const Shoppingcart = styled.div`
  height: 25px;
  width: 70px;
  display: grid;
  grid-column: 50px 20px;
  justify-items: center;
`;

const Num = styled.div`
  grid-column: 2;
  padding-bottom: 0;
  font-size: 15px;
  align-self: end;
`;

const Header = (props) => {
  // create and add a clickable logo

  // create and add a search bar

  // redo logo tomorrow
  return (
    <Container>
       <div id='page-title'>
        Lion's <br></br>
        Den <br></br>
        Apparel
      </div>
      <Shoppingcart>
        <i class="fas fa-shopping-cart fa-lg" style={{"gridColumn": 1, "alignSelf": "center"}}></i>
        <Num>{props.cartCount}</Num>
      </Shoppingcart>
    </Container>
  )
}

export default Header;