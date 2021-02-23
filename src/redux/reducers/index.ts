import { combineReducers } from 'redux';
import filters from './filters';
import tickets from './tickets';
import activeTab from './activeTab';

const rootReducer = combineReducers({ filters, tickets, activeTab });

export default rootReducer;
