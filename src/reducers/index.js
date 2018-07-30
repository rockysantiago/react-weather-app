import { combineReducers } from 'redux';
import weather from 'reducers/weather';

const rootReducer = combineReducers({ weather });

export default rootReducer;
