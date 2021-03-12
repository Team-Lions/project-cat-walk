import React from 'react';
import NavBar from './NavBar.jsx';
import Search from './Search.jsx';

const Header = () => {
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
          <NavBar />
        </div>
        <div id="search">
          <Search />
        </div>
        <div>
          <button id="mode" onClick={changeMode}>Mode</button>
        </div>
      </header>
    </div>
  )
}

export default Header;