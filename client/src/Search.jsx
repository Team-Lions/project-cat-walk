import React from 'react';

const Search = () => {
  return (
    <div>
      <form id='form'>
        <input type="text" value='Search...' id='input' readOnly={true}></input>
      </form>
    </div>
  )
}

export default Search;