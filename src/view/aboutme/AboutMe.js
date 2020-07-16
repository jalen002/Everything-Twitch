import React from 'react';
import axios from 'axios';
import scar from '../../resources/images/scar.png'
import './aboutme.css';



export default function AboutMe() {
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