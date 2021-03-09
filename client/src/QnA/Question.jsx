import React from "react";
// import Answers from "./Answers.jsx";
import Button from 'react-bootstrap/Button';

class Question extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h2>Q:</h2>
        <h3>{this.props.question.question_body}</h3>
        {this.props.answers.map((answer) => {
            return (
              <div>
                <h2>A:</h2>
                <p>{answer.body}</p>
                <h2>Answerer</h2>
                <p>{answer.answerer_name}</p>
              </div>
            )
          })
        }
      </div>
      )
  }
}



export default Question;