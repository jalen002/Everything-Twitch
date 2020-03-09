import React from 'react';
import ReactPlayer from 'react-player';

export default function Stream() {


  return (
    <div style={{width: '100%', marginTop: '25px'}}>
        <ReactPlayer
        url='https://www.twitch.tv/mintpatty17'
        style={{margin: 'auto'}}
        controls
        />
  </div>
  );
}