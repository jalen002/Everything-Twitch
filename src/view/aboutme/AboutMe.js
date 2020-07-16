import React, { Component } from 'react';
import axios from 'axios';
import scar from '../../resources/images/scar.png'
import './aboutme.css';


let trackerUrlBase = 'https://api.fortnitetracker.com/v1/';
let platform = 'kbm';

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
    //this.retrieveFortniteTrackingInfo('profile/'+platform+'/'+epicNickname);
  }

  retrieveFortniteTrackingInfo (endpoint){
    let trackerApi = trackerUrlBase + endpoint;
    let queryParams = {
      method: 'GET',
    };

    this.setState({isLoaded: false, stats: null, error: null});

    axios.get(trackerApi, queryParams)
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          stats: result
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

  render (){
    return (
      <div>
        <header className="App-header">
          <img src={scar} className="App-logo" alt="scar" />
          <p>
            <span>Mint Patty 17</span>
          </p>
        </header>
      </div>
    );
  }
}


export default AboutMe;