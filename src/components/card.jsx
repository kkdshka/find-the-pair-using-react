import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/gameActions.jsx';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.handleFlipperClick = this.handleFlipperClick.bind(this);
    }

    componentWillMount() {
        this.props.parseCardBack(this.props.cardBack);
    }

    handleFlipperClick(flipper) {
        if (flipper.currentTarget.className === 'flipper')
            flipper.currentTarget.className = 'flipper flipped';
        else if (flipper.currentTarget.className === 'flipper flipped') {
            flipper.currentTarget.className = 'flipper';
        }
    }

    render() {
        return (
            <div className={'card-wrapper large'}>
                <div className={'flipper'} onClick={(flipper) => this.handleFlipperClick(flipper)}>
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