import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Settings } from './components/settings.jsx';
import { Game } from './components/game.jsx';
import { Score } from './components/score.jsx';
import { NotFound } from './components/notfound.jsx';

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={ Settings } />
            <Route path="/settings" component={ Settings } />
            <Route path="/score" component={ Score } />
            <Route path="/game" component={ Game } />
            <Route component={ NotFound } />
        </Switch>
    </Router>,
    document.getElementById("root")
);