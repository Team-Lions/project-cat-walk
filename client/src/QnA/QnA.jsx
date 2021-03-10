import React, {Component} from 'react';
import bootstrap from "react-bootstrap";
import QnAList from './QnAList.jsx';
import axios from 'axios';
import token from '../../../public/token.js';

const itemsPerPage = 2;

class QnA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      index: 2,
      id: this.props.productID
    }

    this.getQuestions = this.getQuestions.bind(this);
    this.loadMore = this.loadMore.bind(this);
  }


  getQuestions(id, index) {
    return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/qa/questions`, {
      headers: {
        'Authorization': token
      },
      params: {
        product_id: id
      }
    })
    .then((questions) => {
      this.setState({
        data: questions.data.results.slice(0, index),
        id: id
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }

//replace setState w var
  loadMore() {
    this.setState({index: this.state.index += 1})
    this.getQuestions(this.props.productID, this.state.index)
    .then((data) => {
      this.setState({data: data(0, this.state.index)})
    })
  }

  componentDidMount() {
    this.getQuestions(this.props.productID, this.state.index);
  }

  render() {
    return (
      <div>
        <h1>Questions and Answers</h1>
        {this.state.data && <QnAList data={this.state.data} answers={this.state.data.answers} loadMore={this.loadMore}/>}

      </div>
    )
  }
}
//minor changes
export default QnA;