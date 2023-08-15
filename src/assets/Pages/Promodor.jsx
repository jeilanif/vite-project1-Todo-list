import React, { useState } from 'react';
import '/Users/jeilani/Desktop/Vite/vite-project1-Todo list/src/assets/Pages/Promodor.css';

function PromodorApp() {
  const [promodorTime, setPromodorTime] = useState(25 * 60);
  const [longBreakTime, setLongBreakTime] = useState(15 * 60);
  const [shortBreakTime, setShortBreakTime] = useState(5 * 60);

  return (
    <div className="promodor-app">
      <h1>Promodor App</h1>
      <div className="promodor-section">
        <div className="timer">
          <p>Promodor Timer: {promodorTime} seconds</p>
        </div>
        <div className="timer">
          <p>Long Break Timer: {longBreakTime} seconds</p>
        </div>
        <div className="timer">
          <p>Short Break Timer: {shortBreakTime} seconds</p>
        </div>
      </div>
      <div className="promodor-section">
        <button className="button">Start Promodor</button>
        <button className={`button long-break`}>Start Long Break</button>
        <button className={`button short-break`}>Start Short Break</button>
      </div>
    </div>
  );
}

export default PromodorApp;
