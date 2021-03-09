import React from "react";
import Question from './Question.jsx';
import Button from 'react-bootstrap/Button';


class QnAList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 1,
      isLoading: true,
      answers: []
    }

    this.loadMoreAnswers = this.loadMoreAnswers.bind(this);
  }

  loadMoreAnswers() {
    console.log(this.props.data.answers);
  }

  componentDidMount() {
    if (this.props.data) {
      this.setState({answers: this.props.data})
    } else {
      this.setState({isLoading: true})
    }
  }

  render() {
    {console.log('answers', this.props.data[0])}
    return (
      <div>
        {this.state.isLoading ? this.props.data.map((question) => {
          return (
          <Question question={question} answers={this.state.answers} loadMoreAnswers={this.loadMoreAnswers} key={this.state.index}/>
          )
        }) : <div>No answers</div>}
        <Button size="lg" onClick={this.props.loadMore}>
          Load More
        </Button>
      </div>
    )
  }
}


export default QnAList;