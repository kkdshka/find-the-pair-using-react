import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/gameActions.jsx';

class Card extends React.Component {
    componentWillMount() {
        this.props.parseCardBack(this.props.cardBack);
    }

    setCardClass() {
        switch (this.props.settings.fieldSize) {
            case '2':
            case '4':
                return 'card-wrapper large';
                break;
            case '6':
            case '8':
                return 'card-wrapper medium';
                break;
            case '10':
            case '12':
                return 'card-wrapper small';
                break;
            default:
                return 'card-wrapper medium';
                break;
        }
    }

    render() {
        return (
            <div className={this.setCardClass()}>
                <div className={'flipper'} data={this.props.cardFace} onClick={this.props.onClick}>
                    <div className={'card back'}>
                        <img src={this.props.cardBackSrc}/>
                    </div>
                    <div className={'card face'}>
                        <img src={this.props.cardFace}/>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        settings: state.settingsReducer.settings,
        flipperStatus: state.cardReducer.flipperStatus,
        cardBackSrc: state.cardReducer.cardBackSrc
    }
}

function mapDispatchToProps(dispatch) {
    return {
        parseCardBack: (cardBack) => {
            dispatch(actions.parseCardBack(cardBack));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);