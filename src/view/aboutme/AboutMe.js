import React, { Component } from 'react';
import axios from 'axios';
import './aboutme.css';
import fortnite from '../../resources/images/fortnite.jpg';
import apiConfig from '../../resources/private/apiKeys';

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';



let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
let trackerUrlBase = 'https://api.fortnitetracker.com/v1/';
let platform = 'kbm';
let apiKey = apiConfig.apiKey;
let epicNickname = apiConfig.epicNickname;

const useStyles = theme => ({
  root: {
    maxWidth: 390,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
});


class AboutMe extends Component{
  constructor (props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      stats: null
    }
  }

  componentDidMount (){
    this.retrieveFortniteTrackingInfo('profile/'+platform+'/'+epicNickname);
  }

  retrieveFortniteTrackingInfo (endpoint){
    let trackerApi = proxyUrl + trackerUrlBase + endpoint;
    let queryParams = {
      method: 'GET',
      headers: {
        'TRN-Api-Key': apiKey
      }
    };

    this.setState({isLoaded: false, stats: null, error: null});

    axios.get(trackerApi, queryParams)
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          stats: result.data
        })
      },
      (error) => {
        this.setState({
          isLoaded: false,
          error: error
        });
      }
    )
  }

  formatXAxis = (tickItem) => {
    var date = new Date(tickItem).toLocaleDateString();
    return date;
  }

  render (){
    let { classes } = this.props;
    let {isLoaded, stats, error} = this.state;

    return (
      <div>
        <header className='aboutMeHeader'>
          Mint Patty 17
        </header>
        <div className='aboutMeBody'>
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar alt='fortnite' src={fortnite} />
              }
              title='Fortnite'
            />
            <CardMedia>
              <LineChart width={360} height={150} data={isLoaded ? stats.recentMatches : null}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='dateCollected' tickFormatter={this.formatXAxis}/>
                <YAxis/>
                <Tooltip />
                <Legend />
                <Line type='monotone' dataKey='kills' stroke='#8884d8'/>
              </LineChart>
            </CardMedia>
            <CardContent>
              <Typography variant='body2' color='textSecondary' component='p'>
                Fortnite Wins: {isLoaded ? stats.lifeTimeStats[8].value : null}<br/>
                Fortnite K/D: {isLoaded ? stats.lifeTimeStats[11].value : null}
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}


export default withStyles(useStyles)(AboutMe);