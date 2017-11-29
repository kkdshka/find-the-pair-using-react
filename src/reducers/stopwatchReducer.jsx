import * as actionTypes from '../actions/actionTypes';

const initialState = {
    seconds: 0,
    time: '00:00:00',
    buttonName: 'pause',
    status: 'running'
};

export function stopwatchReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.HANDLE_PAUSE_BUTTON_CLICK:
            switch (state.status) {
                case 'stopped':
                    return startStopwatch();
                case 'running':
                    return pauseStopwatch();
                default:
                    return state;
            }
        case actionTypes.TICK:
            return {
                ...state,
                seconds: state.seconds + 1,
                time: formatTime(state.seconds)
            };
        default:
            return state;
    }

    function startStopwatch() {
        return {
            ...state,
            status: 'running',
            buttonName: 'pause'
        }
    }

    function pauseStopwatch() {
        return {
            ...state,
            status: 'stopped',
            buttonName: 'resume'
        };
    }

    function formatTime(time) {
        const hours = Math.floor(time / (60 * 60));
        time %= (60 * 60);
        const min = Math.floor(time / 60);
        time %= 60;
        const sec = Math.floor(time);

        return pad(hours, 2) + ':' + pad(min, 2) + ':' + pad(sec, 2);

        function pad(num, size) {
            let s = "0000" + num;
            return s.substr(s.length - size);
        }
    }
}