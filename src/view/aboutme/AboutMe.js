import React, { Component } from 'react';
import axios from 'axios';
import './aboutme.css';
import fortnite from '../../resources/images/fortnite.jpg';
import apiConfig from '../../resources/private/apiKeys';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import FortniteRecentGames from '../../charts/FortniteRecentGames';



let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
let trackerUrlBase = 'https://api.fortnitetracker.com/v1/';
let platform = 'kbm';
let apiKey = apiConfig.apiKey;
let epicNickname = apiConfig.epicNickname;

const useStyles = theme => ({
  root: {
    maxWidth: 690,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
});


class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      stats: null,
    }
  }

  componentDidMount() {
    this.retrieveFortniteTrackingInfo('profile/' + platform + '/' + epicNickname);
  }

  retrieveFortniteTrackingInfo(endpoint) {
    let trackerApi = proxyUrl + trackerUrlBase + endpoint;
    let queryParams = {
      method: 'GET',
      headers: {
        'TRN-Api-Key': apiKey
      }
    };

    this.setState({ isLoaded: false, stats: null, error: null });

    axios.get(trackerApi, queryParams)
      .then(
        (result) => {
          this.setState({isLoaded: true, stats: result.data, error: null});
        },
        (error) => {
          this.setState({isLoaded: false, stats: null, error: error});
        }
      )
  }


  render() {
    let { classes } = this.props;
    let { isLoaded, stats, error } = this.state;

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
              <FortniteRecentGames data={stats} />
            </CardMedia>
            <CardContent>
              <Typography variant='body2' color='textSecondary' component='p'>
                Total Fortnite Wins: {isLoaded ? stats.lifeTimeStats[8].value : null}<br />
                Overall Fortnite K/D: {isLoaded ? stats.lifeTimeStats[11].value : null}
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}


export default withStyles(useStyles)(AboutMe);