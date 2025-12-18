import React, { Component } from 'react';
import Comment from './Comment';

class CommentList extends React.Component {
    render() {
        return(
            <div className='commentList'>
                <Comment key={1}/>
            </div>
        );
    }
}

export default CommentList