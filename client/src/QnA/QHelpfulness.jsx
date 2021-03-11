import React from 'React';
import axios from 'axios';

class QHelpfulness extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: false
    }

    this.helpful = this.helpful.bind(this);
  }

  helpful(e) {
    e.preventDefault();
    e.target.innerHTML++;
    this.setState({disabled: true});
    console.log(this.props.questionID);
    axios.put(`/qa/questions/${this.props.questionID}/helpful`);
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