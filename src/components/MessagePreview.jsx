import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

import './MessagePreview.less';

class MessagePreview extends React.Component{
    render() {
        const url = '/inbox/messages/' + this.props.id;
        const selected = this.props.selected;
        const classes = classNames('MessagePreview', { 'selected': selected });

        return (
            <div className={classes}>
                <Link to={url} >
                    <div className='title'>
                        {this.props.title}
                    </div>

                    <div className='from'>
                        from {this.props.senderName}
                    </div>
                </Link>
            </div>
        );
    }
};

export default MessagePreview;
