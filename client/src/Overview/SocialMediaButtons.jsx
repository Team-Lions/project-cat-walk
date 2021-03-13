import React from 'react';
import styled, { css } from 'styled-components';

const Link = styled.a`
  color: deepskyblue;
  padding-right: 10px;
  :hover {
    cursor: pointer;
    color: deeppink;
  }
`;

var SocialMediaButtons = (props) => (
  <div className="SocialMediaButtons">
    <p></p>
    Share this item!
    <div>
      <Link href="https://facebook.com"><i className="fab fa-facebook-square fa-2x"></i></Link>
      <Link href="https://twitter.com"><i className="fab fa-twitter-square fa-2x"></i></Link>
      <Link href="https://pinterest.com"><i className="fab fa-pinterest-square fa-2x"></i></Link>
    </div>
  </div>
);

export default SocialMediaButtons;