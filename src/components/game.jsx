import React from 'react';
import {Link} from 'react-router-dom';

import Stopwatch from './stopwatch.jsx';

class Game extends React.Component {
    render() {
        return (
            <div>
                <div className={'links-wrapper'}>
                    <Link to={'/settings'}>Settings</Link>
                    <Link to={'/score'}>Score</Link>
                </div>
                <Stopwatch/>
            </div>
        );
    }
}

export default Game;