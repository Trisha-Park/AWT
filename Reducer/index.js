import { planReducer } from './planReducer';
import { authReducer } from './authReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    planReducer,
    authReducer,
});
