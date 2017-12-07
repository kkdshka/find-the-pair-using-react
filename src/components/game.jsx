import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Stopwatch from './stopwatch.jsx';
import Card from './card.jsx';

import * as actions from '../actions/gameActions.jsx';

class Game extends React.Component {
    componentWillMount() {
        if(this.props.settings.fieldSize === '') {
            window.location.href = '/settings';
        }
        this.props.getSettings(this.props.settings);
        this.props.getCards();
    }

    componentWillUnmount() {
        this.props.resetGame();
    }

    renderTableContent() {
        let cardId = 0;
        let rowId = 0;
        let columnId = 0;
        const rows = [];
        for (let i = 0; i < this.props.settings.fieldSize; i++) {
            const columns = [];
            for (let i = 0; i < this.props.settings.fieldSize; i++) {
                columns.push(
                    <td key={'column' + columnId.toString()}>
                        <Card
                            cardBack={this.props.settings.cardsBack}
                            cardFace={this.props.cardFaces[cardId]}
                            key={'card' + cardId.toString()}
                            data={'card' + cardId.toString()}
                            onClick={(card) => this.props.handleOnCardClick(card, card.currentTarget.value)}
                        />
                    </td>
                );
                cardId++;
                columnId++;
            }
            rows.push(<tr key={'row' + rowId.toString()}>{columns}</tr>);
            rowId++;
        }
        return rows;
    }

    renderBlocker() {
        if (this.props.isBlocked || this.props.stopwatchStatus === 'stopped') {
            return (
                <div id={'blocker'} className={'blocker'}></div>
            );
        }
    }

    renderWinForm() {
        if (this.props.isWin) {
            return (
                <div className={'win-form'}>
                    <b>You win!</b>
                    <input
                        ref={'inputName'}
                        type={'text'}
                        placeholder={'Enter your name'}
                        onChange={(event) => this.props.handleOnChangeName(event.currentTarget.value)}
                    />
                    <b>Your score: {this.props.score}</b>
                    <input
                        type={'submit'}
                        className={'submit'}
                        value={'Save score'}
                        onClick={this.props.handleOnSaveScoreClick()}
                    />
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <div className={'links-wrapper'}>
                    <Link to={'/settings'} className={'link'}>Settings</Link>
                    <Link to={'/score'} className={'link'}>Score</Link>
                </div>
                <Stopwatch/>
                {this.renderBlocker()}
                <table className={'game-field ' + this.props.settings.fieldColor}>
                    <tbody>
                    {this.renderTableContent()}
                    </tbody>
                </table>
                {this.renderWinForm()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        settings: state.settingsReducer.settings,
        cardFaces: state.gameReducer.cardFaces,
        isBlocked: state.gameReducer.isBlocked,
        isWin: state.gameReducer.isWin,
        stopwatchStatus: state.stopwatchReducer.status,
        score: state.gameReducer.score
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getSettings: (settings) => {
            dispatch(actions.getSettings(settings));
        },
        getCards: () => {
            dispatch(actions.getCards());
        },
        handleOnCardClick: (card) => {
            dispatch(actions.handleOnCardClick(card));
        },
        handleOnSaveScoreClick: () => {
            dispatch(actions.handleOnSaveScoreClick());
        },
        handleOnChangeName: (name) => {
            dispatch(actions.handleOnChangeName(name));
        },
        resetGame: () => {
            dispatch(actions.resetGame());
        },
        stopStopwatch: () => {
            dispatch(actions.handlePauseButtonClick());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);