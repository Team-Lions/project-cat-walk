import React from "react";
// import Answers from "./Answers.jsx";
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
              <h2>A:</h2>
              <p>{answer.body}</p>
              <h2>Answerer</h2>
              <p>{answer.answerer_name}</p>
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