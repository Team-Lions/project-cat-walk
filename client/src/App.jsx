import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './Overview/Overview.jsx';
import Rating from './Ratings&Reviews/rating.jsx'
import RelatedItems from './RelatedItems&Comparisons/RelatedItems.jsx';
import YourFit from './RelatedItems&Comparisons/YourFit.jsx'
import css from './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Overview />
        <RelatedItems />
        <YourFit />
        <Rating />
      </div>
    );
  }
};

export default App;