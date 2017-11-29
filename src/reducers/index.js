import { combineReducers } from 'redux';
import { settingsReducer } from './settingsReducer.jsx';
import { stopwatchReducer } from './stopwatchReducer.jsx';

export default combineReducers({
    settingsReducer,
    stopwatchReducer
});