import React, { Component } from 'react'

class SendMessageForm extends Component {
  state = {
    text: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.text);
    this.setState({ text: '' });
  }

  onChange = (e) => {
    this.setState({ text: e.target.value });
    if (this.props.onChange) {
      this.props.onChange();
    }
  }

  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        className="send-message-form">
        <input
            disabled={this.props.disabled}
            onChange={this.onChange}
            value={this.state.text}
            placeholder="Type your message and hit ENTER"
            type="text" />
      </form>
    )
  }
}

export default SendMessageForm