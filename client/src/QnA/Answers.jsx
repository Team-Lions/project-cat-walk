import React from "react";
import Button from 'react-bootstrap/button'

class Answers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showButton: false
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
              <h2 style={{fontWeight: "Bold", color:"deepPink", padding: "5px"}}>A:</h2>
              <p style={{fontStyle: "italic", color:"deepPink", padding: "5px"}}>{answer.body}</p>
              <h2 style={{fontWeight: "Bold", color:"deepPink", padding: "5px"}}>Answerer</h2>
              <p style={{color:"deepPink", borderBottom:"1px solid deepPink", padding: "5px"}}>{answer.answerer_name}</p>
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