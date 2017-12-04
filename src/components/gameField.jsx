import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions/gameActions.jsx';
import Card from './card.jsx';

class GameField extends React.Component {
    componentWillMount() {
        this.props.getSettings(this.props.settings);
        this.props.getCards();
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
                            value={'card' + cardId.toString()}
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


    render() {
        return (
            <table className={'game-field'}>
                <tbody>
                    {this.renderTableContent()}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state) {
    return {
        settings: state.settingsReducer.settings,
        cardFaces: state.gameFieldReducer.cardFaces
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getSettings: (settings) => {
            dispatch(actions.getSettings(settings))
        },
        getCards: () => {
            dispatch(actions.getCards())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameField);