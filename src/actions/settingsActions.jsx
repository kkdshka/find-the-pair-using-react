import * as actionTypes from './actionTypes';

export function setSettings(settings) {
    return {
        type: actionTypes.SET_SETTINGS,
        payload: settings
    }
}