import { combineReducers } from 'redux';
import filters from './filters';
import searchId from './searchId';

const rootReducer = combineReducers({ filters, searchId });

export default rootReducer;
