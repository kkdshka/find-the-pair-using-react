import { combineReducers } from 'redux';
import { settingsReducer } from './settingsReducer.jsx';
import { stopwatchReducer } from './stopwatchReducer.jsx';
import { cardReducer } from './cardReducer.jsx';
import { gameFieldReducer } from './gameFieldReducer.jsx';

export default combineReducers({
    settingsReducer,
    stopwatchReducer,
    cardReducer,
    gameFieldReducer
});