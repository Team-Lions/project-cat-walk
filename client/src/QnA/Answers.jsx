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
<<<<<<< HEAD
              <h2 style={{fontWeight: "Bold", color:"deepPink"}}>A:</h2>
              <p style={{fontStyle: "italic", color:"deepPink"}}>{answer.body}</p>
              <h2 style={{fontWeight: "Bold", color:"deepPink"}}>Answerer</h2>
              {answer.answerer_name === 'Seller' ?
              <p style={{color:"deepPink", borderBottom:"1px solid deepPink", fontSize: "20px", fontWeight: "Bold"}}>By {answer.answerer_name}, {dateFormat(answer.date, "mmmm dS, yyyy")}</p> :
              <p style={{color:"deepPink", borderBottom:"1px solid deepPink", fontWeight: "normal"}}>By {answer.answerer_name}, {dateFormat(answer.date, "mmmm dS, yyyy")}</p>}
              <div>Yes</div>
              <QHelpfulness questionID={this.props.questionID} helpfulness={answer.helpfulness}/>
=======
              <h2 style={{fontWeight: "Bold", color:"deepPink", padding: "5px"}}>A:</h2>
              <p style={{fontStyle: "italic", color:"deepPink", padding: "5px"}}>{answer.body}</p>
              <h2 style={{fontWeight: "Bold", color:"deepPink", padding: "5px"}}>Answerer</h2>
              <p style={{color:"deepPink", borderBottom:"1px solid deepPink", padding: "5px"}}>{answer.answerer_name}</p>
>>>>>>> a1bacfc88ad15db41613dcb33baf2e316610d3e3
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