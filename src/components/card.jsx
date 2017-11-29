import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/gameActions.jsx';

class Card extends React.Component {
    render() {
        return (
            <div className={'card-wrapper large'}>
                <div className={this.props.flipperStatus} onClick={() => this.props.handleFlipperClick()}>
                    <div className={'card back'}>
                        <img src={'./src/data/cardBacks/cardBack01.jpg'}/>
                    </div>
                    <div className={'card face'}>
                        <img src={'./src/data/cardFaces/cardFace01.png'}/>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        flipperStatus: state.cardReducer.flipperStatus
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleFlipperClick: () => {
            dispatch(actions.handleFlipperClick());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);