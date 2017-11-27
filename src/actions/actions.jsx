import * as actionTypes from './actionTypes';

export function setSettings(settings) {
    return {
        type: actionTypes.SET_SETTINGS,
        payload: settings
    }
}

export function getSettings(settings) {
    return {
        type: actionTypes.GET_SETTINGS,
        payload: settings
    }
}