import React, { Component } from 'react';

class CommentBox extends React.Component {
    render() {
        return(
            <div className='commentBox'>
                <input className='input'/>
                <button className='button'>Post</button>
            </div>
        );
    }
}

export default CommentBox;