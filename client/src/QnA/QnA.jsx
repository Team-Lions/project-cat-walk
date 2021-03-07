import React, {Component} from 'react';
import bootstrap from "react-bootstrap";
import exampleData from './ExampleData.js';
import QnAList from './QnAList.jsx';

class QnA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: exampleData
    }
  }


  render() {
    return (
      <div>
        <h1>Questions and Answers</h1>
        <QnAList data={this.state.data}/>
      </div>
    )
  }
}
//minor changes
export default QnA;