// src/Room.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Room() {
  const { roomId } = useParams();

  // Pomodoro Timer State
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  // Chat State
  const [chatMessages, setChatMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  // Function to start the Pomodoro timer
  const startTimer = () => {
    setTimerRunning(true);
  };

  // Function to pause the Pomodoro timer
  const pauseTimer = () => {
    setTimerRunning(false);
  };

  // Function to reset the Pomodoro timer
  const resetTimer = () => {
    setTimerRunning(false);
    setMinutes(25);
    setSeconds(0);
  };

  // Simulated timer countdown
  useEffect(() => {
    let interval;

    if (timerRunning && (minutes > 0 || seconds > 0)) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerRunning, minutes, seconds]);

  // Function to send a chat message
  const sendMessage = () => {
    if (newMessage.trim() !== '') {
      const message = {
        text: newMessage,
        user: 'User', // You can replace this with the actual user's name
      };
      setChatMessages([...chatMessages, message]);
      setNewMessage('');
    }
  };

  return (
    <div>
      <h1>Room {roomId}</h1>
      <div>
        <h2>Pomodoro Timer</h2>
        <div>
          {`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}
        </div>
        <button onClick={startTimer}>Start</button>
        <button onClick={pauseTimer}>Pause</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
      <div>
        <h2>Chat</h2>
        <div className="chat-box">
          {chatMessages.map((message, index) => (
            <div key={index}>
              <strong>{message.user}:</strong> {message.text}
            </div>
          ))}
        </div>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Room;
