import { createSlice } from "@reduxjs/toolkit";
import { current } from '@reduxjs/toolkit' //Allows us to grab the current state easily in an action

//NOTE!! Topics' property quizIds hold references to quizzes, which in turn hold cardIds as references to cards
//TODO!! the empty topics object here in initialState will in turn be filled with another topics object, leading to the desired nested topics object structure. but *why* is there now a topics object within another topcis object???
const initialState = {
    topics: {},
    //DEBUG CODE!! Testing where the initial state stems from
    favouriteTopics: {}
};

const topicsSlice = createSlice({
    name: 'topics',
    initialState,
    reducers: {
        //Example payload = {id: '123456', name: 'name of topic', icon: 'icon url'}
        addTopic(state, action) {
            //Skips needing to destructure; spread payload should already have the three properties we need (excluding quizIds) (does mean we need action.payload.id below though)
            const topic = {
                ...action.payload,
                quizIds: []
            };

            //Shove the object in at the desired id; this is how to do it with an object mutably, which we don't have to worry about because createSlice has Immer inbuilt
            state.topics[action.payload.id] = topic;
            console.log("current State");
            console.log(current(state));
        },
    },
    //NOTE!! You would use extraReducers when you are dealing with an action that you have already defined somewhere else. The most common examples are responding to a createAsyncThunk action and responding to an action from another slice. It uses the name of the slice, plus the action name (e.g. 'quizzes/addQuiz')
    extraReducers: {
        //When addQuiz goes off, we then assign the quiz’s id to the quizIds array of the topic with which the newly created quiz is associated
        //Example payload -  { id: '123', name: 'quiz name', topicId: '456', cardIds: ['1', '2', '3', ...]} (the same as addQuiz)
        ['quizzes/addQuiz']: (state, action) => {
            const { id, topicId } = action.payload;
            console.log(current(state).topics);

            state.topics[topicId].quizIds.push(id);
            console.log(current(state).topics);
        }
    }
});

//Selectors
//TODO!! Considered Reselect package library? Provides Selector functions that are "Memoized"
/*NOTE!! retrieving 'state' from this selector looks like;
{
    topics: {
        topics: {}
        favouriteTopics: {}
    }
} 
This means that 'state.topic' retrieves the object containing 'topics' and 'favouriteTopics' objects, and 'state.topics.topics' retrieves the empty topics object*/
//Thus, to have the selector retrieve the nested topics object, which will contain all the individual topic objects, we output 'state.topics.topics'
export const selectAllTopics = (state) => state.topics.topics;
console.log("initialState:");
console.log(initialState);
console.log("initialState.topics:");
console.log(initialState.topics);

//Exports
console.log("topicsSlice:");
console.log(topicsSlice);
export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;

/*

(DONE) - Is named topicsSlice.

(DONE) - Has initial state consisting of an object that includes one property, topics, which corresponds to an empty object. This inner topics object will eventually hold all topics keyed by id.

(DONE???) - Has an addTopic action. You can expect the payload for this action to look like {id: '123456', name: 'name of topic', icon: 'icon url'}. Store these values in the state as a new topic object.

(DONE) - Each topic object added to the state should also have a quizIds property, which will correspond to an array containing the ids of each quiz associated with the topic. When a topic is first created, it won’t have any associated quizzes, but you should still create an empty quizIds array so that all topics in the state conform to the same shape.

(DONE) - Create a selector that selects the topics object nested within initialState.

(DONE) - Export the selector as well as the action creators and reducer that your slice generates.

*/