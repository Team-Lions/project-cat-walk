import React from "react";
import Button from 'react-bootstrap/button';
import dateFormat from 'dateformat';
import QHelpfulness from './QHelpfulness';

class Answers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showButton: false,
      disabled: false
    }


  }



  componentDidMount() {
    if (this.props.index === this.props.answers.length) {
      this.setState({showButton: true})
    }
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
              <QHelpfulness helpfulness={answer.helpfulness}/>
            </div>
          )
        }) : <div>No answers</div>
        }
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