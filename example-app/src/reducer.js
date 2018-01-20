import { combineReducers } from 'redux';
import comments from './comments.js';
import users from './users';

export const reducer = combineReducers({
	comments,
	users
});