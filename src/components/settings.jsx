import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions/settingsActions.jsx';

class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const settings = {
            fieldSize: this.refs.fieldSize.value,
            fieldColor: this.refs.fieldColor.value,
            cardsBack: this.refs.cardsBack.value
        };
        this.props.setSettings(settings);
    }

    render() {
        return (
            <div>
                <div className={'links-wrapper'}>
                    <Link to={'/score'} className={"link"}>Score</Link>
                    <Link to={'/game'} className={"link"}>Start game</Link>
                </div>
                <form className={'settings-wrapper'} onSubmit={this.handleSubmit}>
                    <div className={'select-wrapper'}>
                        <label htmlFor={'field-size'}>Choose field size:</label>
                        <select className={'select'} id={'field-size'} ref={'fieldSize'}>
                            <option value={'2'}>2 x 2</option>
                            <option value={'4'}>4 x 4</option>
                            <option value={'6'}>6 x 6</option>
                            <option value={'8'}>8 x 8</option>
                            <option value={'10'}>10 x 10</option>
                            <option value={'12'}>12 x 12</option>
                        </select>
                    </div>
                    <div className={'select-wrapper'}>
                        <label htmlFor={'field-color'}>Choose field color:</label>
                        <select className={'select'} id={'field-color'} ref={'fieldColor'}>
                            <option value={'bisque'}>Bisque</option>
                            <option value={'aquamarine'}>Aquamarine</option>
                        </select>
                    </div>
                    <div className={'select-wrapper'}>
                        <label htmlFor={'cards-back'}>Choose cards back:</label>
                        <select className={'select'} id={'cards-back'} ref={'cardsBack'}>
                            <option value={'blue'}>Blue</option>
                            <option value={'pastel'}>Pastel</option>
                            <option value={'rose'}>Rose</option>
                        </select>
                    </div>
                    <input type="submit" className={'submit'} value="Save"/>
                </form>
            </div>
        );
    }


}

function mapDispatchToProps(dispatch) {
    return {
        setSettings: (settings) => {
            dispatch(actions.setSettings(settings));
        }
    }
}

export default connect(null, mapDispatchToProps)(Settings);