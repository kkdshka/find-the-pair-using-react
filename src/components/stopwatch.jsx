import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/gameActions.jsx';

class Stopwatch extends React.Component {
    componentWillMount() {
        this._startTimer();
    }

    componentWillReceiveProps(nextProps) {
        const currStatus = this.props.status;
        const nextStatus = nextProps.status;

        if (currStatus === 'stopped' && nextStatus === 'running') {
            this._startTimer();
        } else if (currStatus === 'running' && nextStatus === 'stopped') {
            this._stopTimer();
        }
    }

    _startTimer() {
        this._intervalId = setInterval(() => {
            this.props.tick();
        }, 1000);
    }

    _stopTimer() {
        clearInterval(this._intervalId);
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
        buttonName: state.stopwatchReducer.buttonName
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handlePauseButtonClick: () => {
            dispatch(actions.handlePauseButtonClick());
        },
        tick: () => {
            dispatch(actions.tick());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stopwatch);