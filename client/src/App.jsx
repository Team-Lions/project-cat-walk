import React from 'react';
import ReactDOM from 'react-dom';
import Rating from './Ratings&Reviews/Rating.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>Hello<Rating/></div>
  }
};

export default App;