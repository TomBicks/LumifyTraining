import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    quizzes: {}
};

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState,
    reducers: {
        //Example payload = { id: '123', name: 'quiz name', topicId: '456', cardIds: ['1', '2', '3', ...]}
        addQuiz(state, action) {
            const { id, name, topicId, cardIds } = action.payload;

            state.quizzes = {
                ...state.quizzes, 
                [id]: {
                    id: id,
                    name: name,
                    topicId: topicId,
                    cardIds: cardIds
                }
            };
        }
    }
});

//Selectors
export const selectAllQuizzes = (state) => state.quizzes.quizzes;
console.log("initialState:");
console.log(initialState);
console.log("initialState.topics:");
console.log(initialState.topics);

//Exports
console.log("quizzesSlice:");
console.log(quizzesSlice);
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;

/*

(DONE) - Is named 'quizzesSlice'

(DONE) - Has initial state consisting of an object that includes one property, quizzes, which corresponds to an empty object. This inner quizzes object will eventually hold all quizzes keyed by id.

(DONE) - Has an addQuiz action. This action will receive a payload of the form { id: '123', name: 'quiz name', topicId: '456', cardIds: ['1', '2', '3', ...]}.

(DONE) - Has a selector which returns all quizzes from state.

(DONE) - Export the selector as well as the action creators and reducer that your slice generates.

(DONE)I - s added to the store.

*/