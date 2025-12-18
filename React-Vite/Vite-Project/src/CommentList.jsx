import React, { Component } from 'react';
import Comment from './Comment';

class CommentList extends React.Component {
    render() {
        return(
            <div className='commentList'>
                {
                    this.props.messages.map(
                        (message) => <Comment key={message} message={message}/>
                    )
                }
            </div>
        );
    }
}

export default CommentList