import { createStore, combineReducers } from 'redux';
import rootReducer from './reducers';
// saga middle ware import for future
const store = createStore(combineReducers(rootReducer));
export default store;