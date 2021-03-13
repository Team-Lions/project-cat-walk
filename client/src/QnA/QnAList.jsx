import React from "react";
import Question from './Question.jsx';
import Button from 'react-bootstrap/Button';
import AddQ from './AddQ';
import axios from 'axios';
import token from '../../../public/token.js';



class QnAList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      answers: [],
      data: this.props
    }

    this.sendQuestion = this.sendQuestion.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    var data = this.props
    this.setState({isLoading: false, data: data})
  }

  sendQuestion(e, modalData) {
    e.preventDefault();
    axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hratx/qa/questions',
    modalData,
    {
      headers: {
        "Authorization": token
      }
    }
    )
    .catch((err) => {
      console.log('error', err.response.data)
    })
  }

  handleSearch() {

  }

  render() {
    const {data} = this.props;
    return (
      <div>
        <input type="text" onChange={this.handleSearch}/>
        <AddQ question={this.props.question} productID={this.props.productID} sendQuestion={this.sendQuestion}/>
        {this.state.isLoading ? <div>isLoading</div> : data.map((question) => {
          return (
          <Question key={question.question_id} productID={this.props.productID} question={question} answers={Object.values(question.answers)} id={this.props.id} loadMoreAnswers={this.loadMoreAnswers} show={this.state.show}/>
          )
        })}
        <Button size="lg" onClick={this.props.loadMore}>
          Load More
        </Button>
      </div>
    )
  }
}

export default QnAList;