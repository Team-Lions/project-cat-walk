import React from 'React';

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
    this.setState({disabled: true})
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