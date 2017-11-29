import { combineReducers } from 'redux';
import { settingsReducer } from './settingsReducer.jsx';
import { stopwatchReducer } from './stopwatchReducer.jsx';
import { cardReducer } from './cardReducer.jsx';

export default combineReducers({
    settingsReducer,
    stopwatchReducer,
    cardReducer
});