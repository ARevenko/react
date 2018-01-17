import React, { Component } from 'react';

import MessagePreview from './MessagePreview.jsx';

import messages from '../messages.json';

import './InboxPage.less';

class InboxPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messagesState: messages
        };
    };

    render() {
        const constMessages = this.state.messagesState;
        const selectedMessageId = this.props.params.messageId;

        return (
            <div className='InboxPage'>
                <div className='messages'>
                    {
                        constMessages.map(elem =>
                            <MessagePreview
                                key={elem.id}
                                selected={elem.id === selectedMessageId}
                                id={elem.id}
                                title={elem.subject}
                                senderName={elem.senderName} />
                        )
                    }
                </div>

                <div className='message-container'>
                    {this.props.children}
                </div>
            </div>
        );
    };
};

export default InboxPage;