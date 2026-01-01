import React from 'react';
import CommentList from './CommentList';
import CommentBox from './CommentBox';
import Bread from './Bread';
import SelectedBread from './SelectedBread';

//This is what I imagine the bread list to look like, for now; useful names to refer to
//We're not updating this like the comment list, so no need to make it part of state for now; can be held by something else later
const breadInfo = {
  "sourdough": {
    name: "Sourdough",
    desc: "A tough bread!"
  },
  "whitebread": {
    name: "White Bread",
    desc: "Your basic white bread!"
  },
  "wholegrain": {
    name: "Whole-grain",
    desc: "A bread full of grain!"
  }
}

class App extends React.Component {
  state = {
    messages: [
      'React seems like a really cool library',
      'I love using components in React',
      'Makes development so easy',
      'It was hard to follow at first but now I love it'
    ],
    selectedBread: "whitebread"
  }

  selectBread = (selection) => {
    this.setState({
      selectedBread: selection
    });
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
    //Overwrites it; no go
    let spreadTest = {
      breadInfo : {
        ...breadInfo, ["sourdough"] : {
          //name : "test"
        }
      }
    }

    return(
      <div>
        <CommentBox addComment={this.addComment}/>
        <CommentList messages={this.state.messages} deleteComment={this.deleteComment}/>
        <SelectedBread test={breadInfo.sourdough} test2={spreadTest}/>
        <Bread name="sourdough" desc="Test" selectBread={this.selectBread}/>
      </div>
    );
  }
}

export default App;