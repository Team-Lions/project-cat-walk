import React, {Component} from 'react';
import bootstrap from "react-bootstrap";
import QnAList from './QnAList.jsx';
import axios from 'axios';
import token from '../../../public/token.js';


class QnA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      index: 3
    }

    this.getQuestions = this.getQuestions.bind(this);
  }


  getQuestions(id) {
    return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/qa/questions`, {
      headers: {
        'Authorization': token
      },
      params: {
        product_id: id
      }
    })
    .then((questions) => {
      this.setState({data: questions.data.results})
    })
    .catch((err) => {
      console.log(err);
    })
  }

  showMore() {
    console.log('clicked');

  }

  componentDidMount() {
    this.getQuestions(this.props.productID);
  }

  render() {
    return (
      <div>
        <h1>Questions and Answers</h1>
          <QnAList data={this.state.data} showMore={this.showMore}/>
      </div>
    )
  }
}
//minor changes
export default QnA;