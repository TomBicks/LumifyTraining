import React, { Component } from 'react';

class CommentBox extends React.Component {
    constructor(props) {
        super(props);

        //As this is a very simple component, we can get away with this being an uncontrolled component
        this.messageInputRef = React.createRef();
    }

    //Passes back the value in the text input, to add it to messages in App.jsx, then blanks the text input
    addComment = () => {
        this.props.addComment(this.messageInputRef.current.value);
        this.messageInputRef.current.value = '';
    }

    render() {
        return(
            <div className='commentBox'>
                <input ref={this.messageInputRef} className='input'/>
                <button onClick={this.addComment} className='button'>Post</button>
            </div>
        );
    }
}

export default CommentBox;