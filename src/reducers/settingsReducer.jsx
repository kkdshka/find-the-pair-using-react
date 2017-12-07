import * as actionTypes from '../actions/actionTypes';

const initialState = {
    settings: {
        fieldSize: '',
        fieldColor: '',
        cardsBack: ''
    }
};

export function settingsReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SET_SETTINGS: {
            return {...state, settings: action.payload};
        }
        default: {
            return state;
        }
    }
}