import React from "react";
import Question from './Question.jsx';
import Button from 'react-bootstrap/Button';
import AddQ from './AddQ';
import axios from 'axios';
import token from '../../../public/token.js';
import SearchBar from './SearchBar';


class QnAList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      answers: []
    }
  }

  componentDidMount() {
    this.setState({isLoading: false})
  }

  sendQuestion(e, modalData) {
    e.preventDefault();
    console.log(modalData);
    axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hratx/qa/questions',
    modalData,
    {
      headers: {
        "Authorization": token
      }
    }
    )
    .then((results) => {
      console.log(results);
    })
    .catch((err) => {
      console.log('error', err.response.data)
    })
  }

<<<<<<< HEAD
  handleSearch() {
    console.log('changed');
  }

  render() {
    const {data} = this.props;
=======
  render() {
    const {data} = this.props
    {console.log(this.props)}
>>>>>>> parent of f1de47e... Some more styling
    return (
      <div>
        <SearchBar/>
        <AddQ question={this.props.question} productID={this.props.productID} sendQuestion={this.sendQuestion}/>
        {this.state.isLoading ? <div>isLoading</div> : data.map((question) => {
          return (
          <Question productID={this.props.productID} question={question} answers={Object.values(question.answers)} id={this.props.id} loadMoreAnswers={this.loadMoreAnswers} show={this.state.show}/>
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