import { createSlice } from "@reduxjs/toolkit";

//NOTE!! Topics' property quizIds hold references to quizzes, which in turn hold cardIds as references to cards
const initialState = {
    topics: {}
};

const topicsSlice = createSlice({
    name: 'topics',
    initialState,
    reducers: {
        //Example payload = {id: '123456', name: 'name of topic', icon: 'icon url'}
        addTopic(state, action) {
            const topic = {
                [action.payload.id]: {
                    id: action.payload.id,
                    name: action.payload.name,
                    icon: action.payload.icon,
                    quizIds: []
                }
            };
            //TODO!! Does state.push work for an object here, using Immer?
            state.topics.push(topic);
        }
    }
})

//Selectors
//TODO!! Considered Reselect package library? Provides Selector functions that are "Memoized"
export const selectTopics = (state) => state.topics;

//Exports
console.log(topicsSlice);
export const { addBook } = topicsSlice.actions;
export default topicsSlice.reducer;

/*

(DONE) - Is named topicsSlice.

(DONE) - Has initial state consisting of an object that includes one property, topics, which corresponds to an empty object. This inner topics object will eventually hold all topics keyed by id.

(DONE???) - Has an addTopic action. You can expect the payload for this action to look like {id: '123456', name: 'name of topic', icon: 'icon url'}. Store these values in the state as a new topic object.
    - Does state.push work for an object here, using Immer?

(DONE) - Each topic object added to the state should also have a quizIds property, which will correspond to an array containing the ids of each quiz associated with the topic. When a topic is first created, it won’t have any associated quizzes, but you should still create an empty quizIds array so that all topics in the state conform to the same shape.

(DONE???) - Create a selector that selects the topics object nested within initialState.
    - Not sure if they want state.topic or state.topics.topics

(DONE) - Export the selector as well as the action creators and reducer that your slice generates.

*/