import React, { Component } from 'react';
import './Main.css';
import citiField from '../../resources/images/citi-field.jpg';
import Commands from '../commands/Commands';
import StreamPage from '../stream/Stream';
import AboutMe from '../aboutme/AboutMe';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


const drawerWidth = 240;

const useStyles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundColor: 'black',
    borderBottom: '1px solid white',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundImage: 'url(' + citiField + ')'
  },
  dividerColor: {
    backgroundColor: 'white',
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
  }
});


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: null };
  }

  updateSelected(selectedIndex) {
    this.setState({ selected: selectedIndex });
  }

  render () {
    const { classes } = this.props;
    const { selected } = this.state;


    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position='fixed' className={classes.appBar} >
          <Toolbar />
        </AppBar>
        <Router basename={process.env.PUBLIC_URL}>
          <Drawer
            className={classes.drawer}
            variant='permanent'
            classes={{
              paper: classes.drawerPaper
            }}
            anchor='left'
          >
            <span className='Main-name'>Mint Patty 17</span>
            <Divider className={classes.dividerColor}/>
            <List>
              <MenuItem component={Link} to="/" onClick={() => this.updateSelected(0)} selected={selected === 0}>
                <ListItemIcon><i className="fi-nnsuxx-home" style={{color: 'white'}}/></ListItemIcon>
                <ListItemText className='Drawer-text'>About Me</ListItemText>
              </MenuItem>
              <MenuItem component={Link} to="/commands" onClick={() => this.updateSelected(1)} selected={selected === 1}>
                <ListItemIcon><i className="fi-cnluxx-pen" style={{color: 'white'}}/></ListItemIcon>
                <ListItemText className='Drawer-text'>Commands</ListItemText>
              </MenuItem>
              <MenuItem component={Link} to="/stream" onClick={() => this.updateSelected(2)} selected={selected === 2}>
                <ListItemIcon><i className="fi-nnsuxx-twitch-glitch" style={{color: 'white'}}/></ListItemIcon>
                <ListItemText className='Drawer-text'>Stream</ListItemText>
              </MenuItem>
            </List>
          </Drawer>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Route exact path='/' component={AboutMe} />
            <Route path='/commands' component={Commands} />
            <Route path='/stream' component={StreamPage} />
          </main>
        </Router>
      </div>
    );
  }
}

export default withStyles(useStyles)(Main);
