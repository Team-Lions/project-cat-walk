import React from "react";
import Answers from "./Answers.jsx";
import Button from 'react-bootstrap/button';


class Question extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      show: true,
      index: 1
    }


    this.loadMoreAnswers = this.loadMoreAnswers.bind(this);
    this.collapseAnswers = this.collapseAnswers.bind(this);
    this.setShow = this.setShow.bind(this);
  }

  //move loadMore
  loadMoreAnswers() {
    this.setShow();
    var newIndex = this.state.index += 2;
    this.setState({index: newIndex});
  }

  setShow() {
    if (this.state.index === this.props.answers.length - 1) {
      this.setState({show: false})
    }
  }

  collapseAnswers() {
    this.setState({index: 1, show: true});
  }

  render() {
    var valAns = Object.values(this.props.answers).slice(0, this.state.index)
    return (
      <div>
        <h2 style={{color:"deepskyblue", fontWeight:"bold"}}>Q:</h2>
        <h3 style={{color:"deepskyblue", fontWeight:"bold"}}>{this.props.question.question_body}</h3>
        <Answers questionID={this.props.question.question_id} answers={valAns} index={this.state.index} show={this.state.show} loadMoreAnswers={this.loadMoreAnswers} collapseAnswers={this.collapseAnswers}></Answers>
      </div>
      )
  }
}



export default Question;