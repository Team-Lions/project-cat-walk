import React from "react";
import Answers from "./Answers.jsx";
import Button from 'react-bootstrap/button'

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
    console.log('clicked');
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
    console.log('all the answers', this.props.answers)
    return (
      <div>
        <h2>Q:</h2>
        <h3>{this.props.question.question_body}</h3>
        <Answers answers={Object.values(this.props.answers).slice(0, this.state.index)} show={this.state.show} loadMoreAnswers={this.loadMoreAnswers} collapseAnswers={this.collapseAnswers}></Answers>
      </div>
      )
  }
}



export default Question;