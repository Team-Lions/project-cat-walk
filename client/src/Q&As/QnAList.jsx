import React from "react";
import Question from './Question.jsx';

const QnAList = (props) => {
  return (
    <div>
      {props.data.map((question) => {
        return(
        <Question question={question} answers={Object.values(question.answers)}/>
        )
      })}
    </div>
  )
}


export default QnAList;