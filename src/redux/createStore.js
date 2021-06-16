import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as reducers from './reducers';

const rootReducer = combineReducers(reducers);

export const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk),
    ),
);