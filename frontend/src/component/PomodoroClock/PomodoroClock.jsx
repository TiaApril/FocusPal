import React, { useState, useEffect } from 'react';
import './PomodoroClock.css';

function PomodoroClock() {
  const [session, setSession] = useState(25 * 60); // 25 minutes in seconds
  const [breakTime, setBreakTime] = useState(5 * 60); // 5 minutes in seconds
  const [timeLeft, setTimeLeft] = useState(session);
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  const startTimer = () => {
    setIsActive(true);
  };

  const pauseTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsBreak(false);
    setTimeLeft(session);
  };

  useEffect(() => {
    let interval;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (isActive && timeLeft === 0) {
      clearInterval(interval);
      setIsActive(false);
      setIsBreak(!isBreak);
      setTimeLeft(isBreak ? session : breakTime);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft, isBreak, session, breakTime]);

  // Format timeLeft into minutes and seconds
  const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const seconds = (timeLeft % 60).toString().padStart(2, '0');

  return (
    <div className="wrapper">
      <h1 className="title">{isBreak ? 'Break' : 'Session'}</h1>
      <div className="timer">
        <div className="time-part-wrapper">
          <div className="time-part minutes tens">
            {minutes[0]}
          </div>
          <div className="time-part minutes ones">
            {minutes[1]}
          </div>
        </div>
        <div className="time-part-wrapper">
          <div className="time-part seconds tens">
            {seconds[0]}
          </div>
          <div className="time-part seconds ones">
            {seconds[1]}
          </div>
        </div>
      </div>
      <div className="controls">
        <button className="control-button" onClick={startTimer}>
          Start
        </button>
        <button className="control-button" onClick={pauseTimer}>
          Pause
        </button>
        <button className="control-button" onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default PomodoroClock;
