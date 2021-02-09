import { combineReducers } from 'redux';
import User from './userReducer';
import Teacher from './teacherReducer';
import Report from './reportReducer';
import Student from './studentReducer';

const rootReducer = combineReducers({
  User,
  Teacher,
  Report,
  Student,
});

export default rootReducer;
