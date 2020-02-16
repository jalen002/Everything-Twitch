import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import Commands from './view/commands/Commands';

const routing = (
    <Router>
      <div>
        <ul>
            <li>
            <Link to="/Everything-Twitch/#/">Home</Link>
            </li>
            <li>
            <Link to="/Everything-Twitch/#/commands">Commands</Link>
            </li>
        </ul>
        <Route exact path="/Everything-Twitch/#/" component={App} />
        <Route path="/Everything-Twitch/#/commands" component={Commands} />
      </div>
    </Router>
  )

  ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
