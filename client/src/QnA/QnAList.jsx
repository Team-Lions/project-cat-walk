import React from "react";
import Question from './Question.jsx';
import Button from 'react-bootstrap/Button';


class QnAList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 1
    }

    this.loadMoreAnswers = this.loadMoreAnswers.bind(this);
  }

  loadMoreAnswers() {
    console.log('clicked');
  }

  // componentDidMount() {
  //   if (this.props.data) {
  //     this.setState({answers: this.props.data})
  //   } else {
  //     this.setState({answers: 'isLoading'})
  //   }
  // }

  render() {
    {console.log('answers', this.props.data)}
    return (
      <div>
        {this.props.data.map((question) => {
          return (
          <Question question={question} answers={this.state.answers} loadMoreAnswers={this.loadMoreAnswers} key={this.state.index}/>
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