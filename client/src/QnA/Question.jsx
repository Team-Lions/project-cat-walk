import React from "react";
// import Answers from "./Answers.jsx";

const Question = (props) => {
  return (
    <div>
      <h2>Q:</h2>
      <h3>{props.question.question_body}</h3>
      {props.answers.map((answer) => {
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



export default Question;