import React from "react";
import Question from './Question.jsx';
import Button from 'react-bootstrap/Button';


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

  render() {
    const {data} = this.props
    return (
      <div>
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