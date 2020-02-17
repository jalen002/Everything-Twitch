import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Commands from './view/commands/Commands';


const history = createBrowserHistory();
const routing = (
  <Router /*basename={process.env.PUBLIC_URL}*/ history={history}>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/commands">Commands</Link>
        </li>
      </ul>
      <Route exact path="/" component={App} />
      <Route path="/commands" component={Commands} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
