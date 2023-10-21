import React, { useState, useEffect } from 'react';
import "./PomodoroClock.css"


function PomodoroClock() {
  const [session, setSession] = useState(25 * 60); // 25 minutes in seconds
  const [breakTime, setBreakTime] = useState(5 * 60); // 5 minutes in seconds
  const [timeLeft, setTimeLeft] = useState(session);
  const [isActive, setIsActive] = useState(false); // Updated initial state
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

  return (
    <div className="pomodoro">
      <h1>{isBreak ? 'Break' : 'Session'}</h1>
      <div className="timer">
        <p>
          {Math.floor(timeLeft / 60).toString().padStart(2, '0')}:
          {(timeLeft % 60).toString().padStart(2, '0')}
        </p>
      </div>
      <div className="controls">
        <button onClick={startTimer}>Start</button>
        <button onClick={pauseTimer}>Pause</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  )
}

export default PomodoroClock