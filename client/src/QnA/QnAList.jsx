import React from "react";
import Question from './Question.jsx';
import Button from 'react-bootstrap/Button';

const QnAList = (props) => {
  return (
    <div>
      {props.data.map((question) => {
        return(
        <Question question={question} answers={Object.values(question.answers)}/>
        )
      })}
      <Button onClick={props.showMore}>
        Load More
      </Button>
    </div>
  )
}


export default QnAList;