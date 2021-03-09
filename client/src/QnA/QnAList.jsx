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
    // if (this.props.data) {
    //   this.setState({answers: this.props.data})
    // } else {
    //   this.setState({isLoading: true})
    // }
    this.setState({isLoading: false})
  }

  render() {
    // {console.log('not data', this.props.data[0])}
    const {data} = this.props
    return (
      <div>
        {this.state.isLoading ? <div>isLoading</div> : data.map((question) => {
          console.log('questionn', question);
          return (
          <Question question={question} answers={Object.values(question.answers)} key={this.state.index}/>
          )
        })}
        <Button size="lg" onClick={this.props.loadMore}>
          Load More
        </Button>
      </div>
    )
  }
}

// this.props.answers.length > 0 ? this.props.answers : []} loadMoreAnswers={this.loadMoreAnswers
export default QnAList;