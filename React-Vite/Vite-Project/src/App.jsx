import React from 'react';
import CommentList from './CommentList';
import CommentBox from './CommentBox';
import Bread from './Bread';

class App extends React.Component {
  state = {
    messages: [
      'React seems like a really cool library',
      'I love using components in React',
      'Makes development so easy',
      'It was hard to follow at first but now I love it'
    ]
  }

  //Uses concat to create a copy of the messages array, then pushes the new message to that array, then returns it, updating the messages state and creating a new Comment element automatically due to this
  addComment = (message) => {
    this.setState(function(prevState) {
      var messages = prevState.messages.concat();
      messages.push(message);
      return {
        messages: messages
      }
    });
  }
  //Create a copy of the messages array, using concat, then remove the message at the desired index
  deleteComment = (index) => {
    this.setState(function(prevState) {
      var messages = prevState.messages.concat();
      messages.splice(index, 1);
      return {
        messages: messages
      }
    });
  }

  render() {
    return(
      <div>
        <CommentBox addComment={this.addComment}/>
        <CommentList messages={this.state.messages} deleteComment={this.deleteComment}/>
        <Bread desc="This should be an empty, default bread!"/>
      </div>
    );
  }
}

export default App;