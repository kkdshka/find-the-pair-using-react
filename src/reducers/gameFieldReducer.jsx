import * as actionTypes from '../actions/actionTypes';

const initialState = {
    cardFaces: [],
    settings: {
        fieldSize: '4',
        fieldColor: 'bisque',
        cardsBack: 'pastel'
    }
};

export function gameFieldReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_SETTINGS:
            return {...state, settings: action.payload};
        case actionTypes.GET_CARDS:
            return {...state, cardFaces: prepareCardFaces(state.settings.fieldSize)};
        default:
            return state;
    }

}

function prepareCardFaces(fieldSize) {
    const cardsFaces = generateCardsFaces();
    const amount = Math.pow(fieldSize, 2);
    const necessaryCardsFaces = cardsFaces.splice(0, (amount / 2));
    const allNecessaryCardFaces = necessaryCardsFaces.concat(necessaryCardsFaces);
    return shuffle(allNecessaryCardFaces);
}


function generateCardsFaces() {
    let cardsFaces = [];
    for (let i = 1; i < 73; i++) {
        const cardFace = `./src/data/cardFaces/cardFace${pad(i, 2)}.png`;
        cardsFaces.push(cardFace);
    }
    return cardsFaces;

    function pad(num, size) {
        let s = "0000" + num;
        return s.substr(s.length - size);
    }
}


function shuffle(cards) {
    let m = cards.length, t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = cards[m];
        cards[m] = cards[i];
        cards[i] = t;
    }
    return cards;
}