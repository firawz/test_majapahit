import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
const initialState = {
    post: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_POST':
            return { ...state, post: action.payload.post };
        default:
            return state;
    }
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
