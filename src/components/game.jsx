import React from 'react';
import {Link} from 'react-router-dom'

export class Game extends React.Component {
    render() {
        return (
            <div className={'links-wrapper'}>
                <Link to={'/settings'}>Settings</Link>
                <Link to={'/score'}>Score</Link>
            </div>
        );
    }
}