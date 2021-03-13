import React from 'react';
import NavBar from './NavBar.jsx';
import Search from './Search.jsx';
import Carousel from 'react-bootstrap/Carousel';
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
  const changeMode = (e) => {
    e.preventDefault;
    document.body.classList.toggle('light-mode');
  }

  // redo logo tomorrow
  return (
    <div>
      <header>
        <div id='page-title'>
          Lion's <br></br>
          Den <br></br>
          Apparel
        </div>
        <div id="NavBar">
          <NavBar handleProductChange={props.handleProductChange}/>
        </div>
        <div id="search">
          <Search />
        </div>
        <div>
          <span className="material-icons md-48" id="mode" onClick={changeMode}>tungsten</span>
        </div>
      </header>
      <div id="banner">
      <Carousel controls={false} indicators={false}>
        <Carousel.Item interval={3000}>
            <p>50,000 styles added this week!</p>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
            <p><u>Claim</u> 20% off your first order now!</p>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
            <p>Hot new finds: Infinity Stones! Get 'em while they're still hot!</p>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
            <p>Orders over $1.00 qualify for free half-day shipping!</p>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
            <p>Now partnered with <u>Afform</u>, Buy now, Pay Later!</p>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
            <p>Now accepting Dogecoin!</p>
        </Carousel.Item>
      </Carousel>
      </div>
    </div>
    //Helen to clean up so that ShoppingCart exists and is in the right place
//     <Container>
//        <div id='page-title'>
//         Lion's <br></br>
//         Den <br></br>
//         Apparel
//       </div>
//       <Shoppingcart>
//         <i class="fas fa-shopping-cart fa-lg" style={{"gridColumn": 1, "alignSelf": "center"}}></i>
//         <Num>{props.cartCount}</Num>
//       </Shoppingcart>
//     </Container>
  )
}

export default Header;