import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/gameActions.jsx';

class Stopwatch extends React.Component {
    componentDidMount() {
        this.startTimer();
    }

    componentWillReceiveProps(nextProps) {
        const currStatus = this.props.status;
        const nextStatus = nextProps.status;

        if (currStatus === 'stopped' && nextStatus === 'running') {
            this.startTimer();
        } else if (currStatus === 'running' && nextStatus === 'stopped' || this.props.isWin) {
            this.stopTimer();
        }
    }

    startTimer() {
        this.intervalId = setInterval(() => {
            this.props.tick();
        }, 1000);
    }

    stopTimer() {
        clearInterval(this.intervalId);
    }

    componentWillUnmount() {
        this.stopTimer();
        this.props.resetStopwatch();
    }

    render() {
        return (
            <div id={'stopwatch'} className={'stopwatch'}>
                <div id={'time'}>
                    {this.props.time}
                </div>
                <img className={this.props.buttonName} onClick={() => this.props.handlePauseButtonClick()}/>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        time: state.stopwatchReducer.time,
        status: state.stopwatchReducer.status,
        seconds: state.stopwatchReducer.seconds,
        buttonName: state.stopwatchReducer.buttonName,
        isWin: state.gameReducer.isWin
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handlePauseButtonClick: () => {
            dispatch(actions.handlePauseButtonClick());
        },
        tick: () => {
            dispatch(actions.tick());
        },
        resetStopwatch: () => {
            dispatch(actions.resetStopwatch());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stopwatch);