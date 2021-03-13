import React from "react";
import Button from 'react-bootstrap/button';
import dateFormat from 'dateformat';
import QHelpfulness from './QHelpfulness';
import AddA from './AddA';
import axios from 'axios';
import token from '../../../public/token.js';

class Answers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showButton: false,
      disabled: false,
      product: null
    }


  }

  getProduct() {
    return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/${this.props.productID}`, {
      headers: {
        'Authorization': token
      }
    })
    .then((product) => {
      this.setState({product: product.data.name})
    })}


  componentDidMount() {
    if (this.props.index === this.props.answers.length) {
      this.setState({showButton: true})
    }
    this.getProduct();
  }

  render() {

    return (
      <div>
        {this.props.answers.length > 0 ? this.props.answers.map((answer) => {
          return (
            <div>
              <h2 style={{fontWeight: "Bold", color:"deepPink"}}>A:</h2>
              <p style={{fontStyle: "italic", color:"deepPink"}}>{answer.body}</p>
              <h2 style={{fontWeight: "Bold", color:"deepPink"}}>Answerer</h2>
              {answer.answerer_name === 'Seller' ?
              <p style={{color:"deepPink", borderBottom:"1px solid deepPink", fontSize: "20px", fontWeight: "Bold"}}>By {answer.answerer_name}, {dateFormat(answer.date, "mmmm dS, yyyy")}</p> :
              <p style={{color:"deepPink", borderBottom:"1px solid deepPink", fontWeight: "normal"}}>By {answer.answerer_name}, {dateFormat(answer.date, "mmmm dS, yyyy")}</p>}
              <div>Yes</div>
              <QHelpfulness questionID={this.props.questionID} answerID={answer.id} helpfulness={answer.helpfulness}/>
            </div>
          )
        }) : <div>No answers</div>
      }
      <AddA product={this.state.product} question={this.props.question}/>
        {this.state.showButton ?
        this.props.show ?
          <Button onClick={this.props.loadMoreAnswers}>Load More Answers</Button>
          : <Button onClick={this.props.collapseAnswers}>Collapse Answers</Button>

          : <div></div>
          }
      </div>
    )
  }
}



export default Answers;