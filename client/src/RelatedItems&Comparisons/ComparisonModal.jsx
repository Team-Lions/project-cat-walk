import React from 'react';

const ComparisonModal = () => {

  const handleClick = (e) => {
    e.preventDefault();
    console.log('Button Clicked');
  }

  return (
    <div>
      <button onClick={handleClick} id="fav-button">✰</button>
    </div>
  )
};

export default ComparisonModal;