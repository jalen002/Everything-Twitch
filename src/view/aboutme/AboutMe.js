import React from 'react';
import scar from '../../resources/images/scar.png'
import './aboutme.css';



export default function AboutMe() {
  return (
    <div>
      <header className="App-header">
        <img src={scar} className="App-logo" alt="scar" />
        <p>
          <h1>Mint Patty 17</h1>
        </p>
      </header>
    </div>
  );
}