import React, {Component} from 'react';
import bootstrap from "react-bootstrap";
import QnAList from './QnAList.jsx';
import axios from 'axios';
import token from '../../../public/token.js';
import {Scrollbars} from 'rc-scrollbars';

class QnA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    }

    this.getQuestions = this.getQuestions.bind(this);
  }


  getQuestions(id) {
    return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/qa/questions`, {
      headers: {
        'Authorization': token
      },
      params: {
        product_id: id,
        page: 1,
        count: 5
      }
    })
    .then((questions) => {
      this.setState({data: questions.data.results}
      );
    })
    .catch((err) => {
      console.log(err);
    })
  }

  componentDidMount() {
    this.getQuestions(this.props.productID);
  }

  render() {
    return (
      <div>
        <h1>Questions and Answers</h1>
        <Scrollbars style={{width: 500, height: 300}}>
          <QnAList data={this.state.data}/>
        </Scrollbars>
      </div>
    )
  }
}
//minor changes
export default QnA;