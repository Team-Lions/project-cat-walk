import React from "react";
// import Answers from "./Answers.jsx";

const Question = ({question, answers}) => {
  return (
    <div>
      <h2>Q:</h2>
      <h3>{question.question_body}</h3>
      {console.log('answerss', answers)}
      {Object.keys(answers).length > 0 ? answers.map((answer) => {
        return (
          <div>
            <h2>A:</h2>
            <p>{answer.body}</p>
            <h2>Answerer</h2>
            <p>{answer.answerer_name}</p>
          </div>
        )
      }) : <div>No answers</div>
      }
    </div>
    )
}



export default Question;