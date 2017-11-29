import * as actionTypes from '../actions/actionTypes';

const initialState = {
    flipperStatus: 'flipper'
};

export function cardReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.HANDLE_FLIPPER_CLICK: {
            if (state.flipperStatus === 'flipper')
                return {...state, flipperStatus: 'flipper flipped'};
            else if (state.flipperStatus === 'flipper flipped') {
                return {...state, flipperStatus: 'flipper'};
            }
            else return state;
        }
        default: {
            return state;
        }
    }
}