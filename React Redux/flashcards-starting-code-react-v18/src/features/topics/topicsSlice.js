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
            const { id, name, icon } = action.payload;

            //Create an object
            const test = {
                id: id,
                name: name,
                icon: icon,
                quizIds: []
            }
            console.log("test");
            console.log(test);

            const testHolder = {
                topics: {}
            }
            console.log("testHolder");
            console.log(testHolder);

            testHolder.topics = test;
            console.log("testHolder");
            console.log(testHolder);

            console.log("current State");
            console.log(current(state));
            //state.topics = test;
            //Spreading causes the issue with the variable name. If it's just state.topics = test, it works fine, overwriting notwithstanding
            /*state.topics = {
                ...state.topics,
                test
            }*/

            //Shove the object in at the desired id; this is how to do it with an object mutably, which we don't have to worry about because createSlice has Immer inbuilt
            state.topics[id] = test;
            console.log("current State");
            console.log(current(state));


            //NOTE!! Remember, can't use .push for an object
            //NOTE!! If we store the object we're attemtping to create into a variable and add it to state.topics, it'll be an object with the name of the variable (e.g. state.topics.topics.topic.[id], rather than just getting added into the nested topics object)
            /*state.topics = {
                ...state.topics, 
                [id]: {
                    id: id,
                    name: name,
                    icon: icon,
                    quizIds: []
                }
            };*/
        },
        //Example payload = { id: '123', name: 'quiz name', topicId: '456', cardIds: ['1', '2', '3', ...]} (the same as addQuiz)
        addQuizId(state, action) {
            const { id, topicId } = action.payload;
            
            /*state.topics = {
                ...state.topics,
                [topicId]: {
                    id: ...state.topics.[topicId].id,
                    name: ...state.topics.[topicId].name,
                    icon: ...state.topics.[topicId].icon,
                    quizIds: [...state.topics.[topicId].quizIds, id]
                }
            }*/
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