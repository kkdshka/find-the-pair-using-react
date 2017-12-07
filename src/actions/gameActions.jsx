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

export function resetStopwatch() {
    return {
        type: actionTypes.RESET_STOPWATCH
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

export function handleOnCardClick(card, seconds) {
    return {
        type: actionTypes.HANDLE_ON_CARD_CLICK,
        payload: {
            card: card,
            time: seconds
        }
    }
}

export function handleOnSaveScoreClick() {
    return {
        type: actionTypes.HANDLE_ON_SAVE_SCORE_CLICK
    }
}

export function handleOnChangeName(name) {
    return {
        type: actionTypes.HANDLE_ON_CHANGE_NAME,
        payload: name
    }
}

export function resetGame() {
    return {
        type: actionTypes.RESET_GAME
    }
}