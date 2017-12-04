import * as actionTypes from '../actions/actionTypes';

const initialState = {
    flipperStatus: 'flipper',
    cardBackSrc: './src/data/cardBacks/cardBack01.jpg'
};

export function cardReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.PARSE_CARD_BACK: {
            switch(action.payload) {
                case 'blue':
                    return {...state, cardBackSrc: './src/data/cardBacks/cardBack01.jpg'};
                case 'rose':
                    return {...state, cardBackSrc: './src/data/cardBacks/cardBack02.jpg'};
                case 'pastel':
                    return {...state, cardBackSrc: './src/data/cardBacks/cardBack03.jpg'};
                default:
                    return state;
            }
        }
        default: {
            return state;
        }
    }
}