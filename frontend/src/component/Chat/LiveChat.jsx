import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './livechat.css'

const socket = io('http://localhost:3000'); // Replace with your server URL

function LiveChat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Clean up the socket connection on unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    // Emit the message to the server
    socket.emit('message', { text: newMessage, sender: 'user' });

    // Update the local state
    setMessages((prevMessages) => [...prevMessages, { text: newMessage, sender: 'user' }]);
    setNewMessage(''); // Clear the input field after sending

    // You can also update the local state directly without using a callback
    // setMessages([...messages, { text: newMessage, sender: 'user' }]);
    // setNewMessage('');
  };

  return (
    <div className="container">
      <div className="app">
        <div className="head">
          <span className="title">Live Chat</span>
        </div>
        <div className="chat-messages">
          <div className="chat">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`chat-content ${message.sender === 'user' ? 'you' : 'friend'}`}
              >
                {message.text}
                <span className="time">12:45 PM</span>
              </div>
            ))}
          </div>
        </div>
        <div className="msg-box">
          <input
            className="ip-msg"
            type="text"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <span className="btn-group">
            <i className="fa fa-paper-plane" onClick={handleSendMessage}>send</i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default LiveChat;
