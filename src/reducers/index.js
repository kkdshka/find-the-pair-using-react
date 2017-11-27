import { combineReducers } from 'redux';
import { settingsReducer } from './settingsReducer.jsx';
import { gameReducer } from './gameReducer.jsx';

export default combineReducers({
    settingsReducer,
    gameReducer
});