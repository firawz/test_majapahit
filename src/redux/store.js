import { createStore, applyMiddleware } from 'redux';
import thunk from 'thunk';
const initialState = {
    post: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_POST':
            return { ...state, post: action.payload };
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;
