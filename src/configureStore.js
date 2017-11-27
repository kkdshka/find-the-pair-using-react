import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/index';

export function configureStore(initialState) {
    return createStore(rootReducer, initialState);
}