import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Message from './Message';
import Loader from './Loader';
class MessagesList extends Component {
  componentWillUpdate() {
    const node = ReactDOM.findDOMNode(this)
    this.shouldScrollToBottom = node.scrollTop + node.clientHeight + 100 >= node.scrollHeight
  }

  componentDidUpdate() {
    if (this.shouldScrollToBottom) {
        const node = ReactDOM.findDOMNode(this)
        node.scrollTop = node.scrollHeight   
    }
  }

  renderMessages = (messages) => {
    return messages.map((message, index) => {
      return (
          <Message key={message.id} username={message.senderId} text={message.text} />
      )
    })
  }

  render() {

    if (this.props.loading) {
      return <Loader />;
    }
    
    if (!this.props.roomId) {
      return (
          <div className="message-list">
              <div className="join-room">
                  &larr; Join a room (duh)!
              </div>
          </div>
      )
    }
    return (
      <div className="message-list">
          {this.renderMessages(this.props.messages)}
      </div>
    )
  }
}

export default MessagesList