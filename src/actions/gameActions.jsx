import * as actionTypes from './actionTypes';

export function handlePauseButtonClick() {
    return {
        type: actionTypes.HANDLE_PAUSE_BUTTON_CLICK,
    }
}

export function tick() {
    return {
        type: actionTypes.TICK
    }
}