import React, { Component } from 'react';
// import ReactPlayer from 'react-player';
import { TwitchEmbed } from 'react-twitch-embed';


class Stream extends Component {
  constructor (props){
    super(props);
  }

  render (){
    return (
      // Add a placeholder for the Twitch embed
      <div>
        <TwitchEmbed
          channel="mintpatty17"
          id="mintpatty17"
          theme="dark"
          muted
          onVideoPause={() => console.log(':(')}
        />
      </div>
    )
  }
}

export default Stream;