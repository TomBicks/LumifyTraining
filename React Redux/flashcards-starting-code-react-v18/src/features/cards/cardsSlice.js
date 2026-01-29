import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cards: {}
};

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        //Example payload = { id: '123', front: 'front of card', back: 'back of card'}
        addCard(state, action) {
            const card = {
                ...action.payload
            };

            state.cards[action.payload.id] = card;
        }
    }
});

//Selectors
//NOTE!! This is how you pass arguments to a selector
//TODO!! This is unlikely to be the best way to go about this, but I really wasn't sure how else to better find and return the card of the corresponding id from the cards object
export const selectCardId = (cardId) => (state) => {
    const cards = Object.values(state.cards.cards);
    const result = cards.find((card) => card.id === cardId)

    return result;
}

//Exports
export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;

/*

(DONE) - Is named 'cardsSlice'

(DONE) - Has initial state consisting of an object that includes one property, cards, which corresponds to an empty object. This inner cards object will eventually hold all cards keyed by id.

(DONE) - Has an addCard action. This action will receive a payload of the form { id: '123', front: 'front of card', back: 'back of card'}.

(DONE) - Has a selector that returns a card with the given id.

(DONE) - Is added to the store.

*/