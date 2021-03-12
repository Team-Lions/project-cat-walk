import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
    <div>
      <ul id="nav-items">
        <li class="nav-li">New Releases</li>
        <li class="nav-li">Women's</li>
        <li class="nav-li">Men's</li>
        <li class="nav-li">Kid's</li>
        <li class="nav-li">Sale</li>
        <li class="nav-li" id="thanos">Thanos</li>
      </ul>
    </div>
  )
}

export default NavBar;