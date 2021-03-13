import React from 'react';
import NavBar from './NavBar.jsx';
import Search from './Search.jsx';
import Carousel from 'react-bootstrap/Carousel';

const Header = (props) => {
  // create and add a clickable logo

  // create and add a search bar
  const changeMode = (e) => {
    e.preventDefault;
    document.body.classList.toggle('light-mode');
    cardBackgroundToggle();
  }

  const cardBackgroundToggle = () => {
    document.getElementById('rendered-card').class = 'bg="light"';
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
          <span class="material-icons md-48" id="mode" onClick={changeMode}>tungsten</span>
        </div>
      </header>
      <div id="banner">
      <Carousel controls={false} indicators={false}>
        <Carousel.Item interval={3000}>
            <p>50000 styles added this week!</p>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
            <p><u>Claim</u> 20% off your first order now!</p>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
            <p>Hot new finds: Infinity Stones! Get 'em while they're still hot!</p>
        </Carousel.Item>
      </Carousel>
      </div>
    </div>
  )
}

export default Header;