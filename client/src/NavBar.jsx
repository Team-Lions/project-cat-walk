import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = ({handleProductChange}) => {

  let handleThanosClick = (e) => {
    e.preventDefault();
    handleProductChange(21120);
  }

  return (
    <div>
      <ul id="nav-items">
        <li className="nav-li">New Releases</li>
        <li className="nav-li">Women's</li>
        <li className="nav-li">Men's</li>
        <li className="nav-li">Kid's</li>
        <li className="nav-li">Sale</li>
        <li className="nav-li" id="thanos" onClick={handleThanosClick}>Thanos</li>
      </ul>
    </div>
  )
}

export default NavBar;