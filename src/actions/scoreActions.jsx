import * as actionTypes from './actionTypes';

export function handleOnFilterClick(filter) {
    return {
        type: actionTypes.HANDLE_ON_FILTER_CLICK,
        payload: filter
    }
}