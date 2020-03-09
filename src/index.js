import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';

import Commands from './view/commands/Commands';
import StreamPage from './view/stream/Stream';

// constructor(props) {
//   super(props);
//   this.state = {menu: false};
// }

// const toggleDrawer = (open) => event => {
//   if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//     return;
//   }

//   setState({ ...state, menu: open });
// };

const routing = (
  <Router basename={process.env.PUBLIC_URL}>
    <AppBar position='static'>
      <Toolbar>
        <IconButton edge='start' color='inherit' aria-label='menu' /*onClick={toggleDrawer('menu', true)}*/>
          <MenuIcon />
        </IconButton>
        <Typography variant='h6'>
          Mint Patty 17
        </Typography>
        <div>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/commands'>Commands</Link>
            </li>
            <li>
              <Link to='/stream'>Stream</Link>
            </li>
          </ul>
        </div>
      </Toolbar>
    </AppBar>

    <Route exact path='/' component={App} />
    <Route path='/commands' component={Commands} />
    <Route path='/stream' component={StreamPage} />
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
