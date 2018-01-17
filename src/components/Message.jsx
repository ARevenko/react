import React, { Component } from 'react';

import messages from '../messages.json';

import './Message.less';

class Message extends React.Component {
    constructor(props) {
        super(props);
        const messageId = this.props.params.messageId;

        this.state = {
            message: messages.find(message => message.id === messageId)
        };
    };

    componentWillReceiveProps(nextProps) {
        const prevId = this.props.params.messageId;
        const nextId = nextProps.params.messageId;

        if (prevId !== nextId) {
            this.setState({
                message: messages.find(message => message.id === nextId)
            });
        }
    };

    render() {
        const message = this.state.message;

        return (
            <div className='Message'>
                <p><b>From:</b> {message.senderName} ({message.senderEmail})</p>
                <p><b>To:</b> you</p>
                <p><b>Subject:</b> {message.subject}</p>
                <hr />
                <p>{message.body}</p>
            </div>
        );
    };
};

export default Message;
