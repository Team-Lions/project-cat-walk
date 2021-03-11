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

  loadMoreAnswers() {
    var newIndex = this.state.index += 2
    this.setShow();
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
    return (
      <div>
<<<<<<< HEAD
        <h2 style={{color:"deepskyblue", fontWeight:"bold"}}>Q:</h2>
        <h3 style={{color:"deepskyblue", fontWeight:"bold"}}>{this.props.question.question_body}</h3>
        <Answers questionID={this.props.question.question_id} answers={Object.values(this.props.answers).slice(0, this.state.index)} index={this.state.index} show={this.state.show} loadMoreAnswers={this.loadMoreAnswers} collapseAnswers={this.collapseAnswers}></Answers>
=======
        <h2 style={{color:"deepskyblue", fontWeight:"bold", padding: "5px"}}>Q:</h2>
        <h3 style={{color:"deepskyblue", fontWeight:"bold", padding: "5px"}}>{this.props.question.question_body}</h3>
        <Answers answers={Object.values(this.props.answers).slice(0, this.state.index)} index={this.state.index} show={this.state.show} loadMoreAnswers={this.loadMoreAnswers} collapseAnswers={this.collapseAnswers}></Answers>
>>>>>>> a1bacfc88ad15db41613dcb33baf2e316610d3e3
      </div>
      )
  }
}



export default Question;