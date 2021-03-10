import React from 'react';

const AddToYourFit = () => {

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

export default AddToYourFit;