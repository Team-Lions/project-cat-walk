import React from "react";
// import Answers from "./Answers.jsx";
import Button from 'react-bootstrap/button'

const Answers = ({answers, show, loadMoreAnswers, collapseAnswers}) => {
  console.log('answers', answers)
  return (
    <div>
      {answers.length > 0 ? answers.map((answer) => {
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
      {show ?
        <Button onClick={loadMoreAnswers}>Load More Answers</Button>
        : <Button onClick={collapseAnswers}>Collapse Answers</Button>
        }
    </div>
  )
}

export default Answers;