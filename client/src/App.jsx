import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './Overview/Overview.jsx';
import Rating from './Ratings&Reviews/rating.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
<<<<<<< HEAD
    return <div>Hello<Rating/></div>
=======
    return (
      <div>
        <Overview />
        <Ratings />
      </div>
    );
>>>>>>> main
  }
};

export default App;