import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './Overview/Overview.jsx';
import Ratings from './Ratings&Reviews/Ratings.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Overview />
        <Ratings />
      </div>
    );
  }
};

export default App;