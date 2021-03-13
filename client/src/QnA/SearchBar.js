import React from 'react';

const SearchBar = ({keyword, setKeyword}) => {
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"5"};
  return (
    <input
     style={BarStyling}
     key="random1"
     value={keyword}
     placeholder={"find questions"}
     onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

export default SearchBar