import * as actionTypes from '../actions/actionTypes';

const initialState = {
    cardFaces: [],
    settings: {
        fieldSize: '2',
        fieldColor: 'bisque',
        cardsBack: 'pastel'
    },
    flippedCards: [],
    cardPairsOnTable: 0,
    clicks: 0,
    score: 0,
    isWin: false,
    isBlocked: false,
    playerName: ''
};

export function gameReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_SETTINGS:
            return {...state, settings: action.payload};
        case actionTypes.GET_CARDS:
            return {
                ...state,
                cardFaces: prepareCardFaces(state.settings.fieldSize),
                cardPairsOnTable: state.settings.fieldSize * state.settings.fieldSize / 2
            };
        case actionTypes.HANDLE_ON_SAVE_SCORE_CLICK:
            return saveScore(state);
        case actionTypes.HANDLE_ON_CARD_CLICK:
            return handleOnCardClick(action.payload.currentTarget, state);
        case actionTypes.HANDLE_ON_CHANGE_NAME:
            return {...state, playerName: action.payload};
        default:
            return state;
    }
}

function saveScore(state) {
    const scoreData = {playerName: state.playerName, score: state.score, fieldSize: state.settings.fieldSize};
    const allScoresData = JSON.parse(localStorage.getItem('score')) || [];
    allScoresData.push(scoreData);
    localStorage.setItem('score', JSON.stringify(allScoresData));
    return state;
}

function handleOnCardClick(flipper, state) {
    if (flipper.className !== 'flipper flipped' && flipper.className !== 'flipper in-discard-pile') {
        flipper.className += ' flipped';
        const flippedCards = state.flippedCards;
        flippedCards.push(flipper);
        if (flippedCards.length > 1) {
            if (state.flippedCards[0].getAttribute('data') === state.flippedCards[1].getAttribute('data')) {
                discard(state.flippedCards);
                return checkWin();
            } else {
                reverse(state.flippedCards);
                return {...state, flippedCards: [], clicks: state.clicks + 1};
            }
        }
        return {...state, clicks: state.clicks + 1, flippedCards: flippedCards};
    }

    function reverse(cards) {
        setTimeout(function () {
            cards.forEach((card) => {
                card.className = 'flipper';
            });
        }, 500);
    }

    function discard(cards) {
        reverse(cards);
        setTimeout(function () {
            cards.forEach(card => {
                card.className = 'move';
                card.className += ' in-discard-pile';
            });
        }, 600);
    }

    function checkWin() {
        if (state.cardPairsOnTable === 1) {
            return {
                ...state,
                score: calculateScore(
                    state.clicks,
                    state.settings.fieldSize
                ),
                isWin: true,
                isBlocked: true
            };
        }
        else {
            return {
            ...state,
                cardPairsOnTable: state.cardPairsOnTable - 1,
                flippedCards: [],
                clicks: state.clicks + 1
            }
        }
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

// TODO: get time
function calculateScore(clicks, fieldSize, time = 10) {
    return Math.round(Math.pow(10, fieldSize) / ((clicks / 2) * (time)));
}