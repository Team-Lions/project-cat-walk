import React from 'React';
import axios from 'axios';
import token from '../../../public/token.js';

class QHelpfulness extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: false,
      helpfuls: 0,

    }

    this.helpful = this.helpful.bind(this);
  }

  helpful(e) {
    e.preventDefault();
    e.target.innerHTML++;
    axios({
      method: 'put',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hratx/qa/answers/${this.props.answerID}/helpful`,
      params: {
        answer_id: this.props.answerID
      },
      headers: {
        'Authorization': token
      }
    })
    .then(() => {
      this.setState({disabled: true})
    })
    // axios.put(`/qa/questions/${this.props.questionID}/helpful`, {
    //   headers: {
    //     Authorization: token
    //   },
    //   params: {
    //     question_id: this.props.questionID
    //   }
    // });
  }

  componentDidMount() {
    this.setState({helpfuls: this.props.helpfulness})
  }

  render() {
    return (
      <div>
        {!this.state.disabled ?
          <a to={'/'} onClick={this.helpful}>{this.props.helpfulness}</a> :
          <a to={'/'}>{this.props.helpfulness}</a>}
      </div>
    )
  }

}

export default QHelpfulness