import * as actionTypes from '../actions/actionTypes';

const initialState = {
    filteredScoreData: []
};

export function scoreReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.HANDLE_ON_FILTER_CLICK:
            return {...state, filteredScoreData: filterScoreData(action.payload, loadData())};
        default:
            return state;
    }
}

function loadData() {
    const data = JSON.parse(localStorage.getItem('score')) || [];
    return data;
}

function filterScoreData(filter, scoreData) {
    const filteredData = scoreData.filter((element) => {
        return element.fieldSize === filter;
    });
    return filteredData.sort(compare);

    function compare(scoreData1, scoreData2) {
        if(scoreData1.score > scoreData2.score) {
            return -1;
        }
        if(scoreData1.score < scoreData2.score) {
            return 1;
        }
        if(scoreData1.score === scoreData2.score) {
            return 0;
        }
    }
}