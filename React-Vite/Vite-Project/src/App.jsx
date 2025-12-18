import React from 'react';
import CommentList from './CommentList';
import CommentBox from './CommentBox';

class App extends React.Component {
  state = {
    messages: [
      'React seems like a really cool library',
      'I love using components in React',
      'Makes development so easy',
      'It was hard to follow at first but now I love it'
    ]
  }

  //Will concat the new post to the messages array, updating the messages state and creating a new Comment element automatically due to this.state.messages passed to CommentList
  addComment = (message) => {
    this.setState(function(prevState) {
      var messages = prevState.messages.concat();
      messages.push(message);
      return {
        messages: messages
      }
    });
  }

  render() {
    return(
      <div>
        <CommentBox addComment={this.addComment}/>
        <CommentList messages={this.state.messages}/>
      </div>
    );
  }
}

export default App;