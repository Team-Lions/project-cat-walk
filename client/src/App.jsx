import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './Overview/Overview.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Overview />
      </div>
    )
  }
};

export default App;