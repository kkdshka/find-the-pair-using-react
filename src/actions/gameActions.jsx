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

export function parseCardBack(cardBack) {
    return {
        type: actionTypes.PARSE_CARD_BACK,
        payload: cardBack
    }
}

export function getSettings(settings) {
    return {
        type: actionTypes.GET_SETTINGS,
        payload: settings
    }
}

export function getCards() {
    return {
        type: actionTypes.GET_CARDS,
    }
}