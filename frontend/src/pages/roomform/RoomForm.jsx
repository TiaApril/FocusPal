import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './roomform.css';
import { roomData } from '../../data'; // Import your roomData

function RoomForm() {
  const [room, setRoom] = useState({
    title: '',
    subject: '',
    host: '',
    date: '',
    startTime: '',
    endTime: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoom({ ...room, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRoom = {
      id: roomData.length + 1, // Generate a new ID
      ...room,
    };

    // Update the local roomData
    roomData.push(newRoom);

    // Reset the form fields
    setRoom({
      title: '',
      subject: '',
      host: '',
      date: '',
      startTime: '',
      endTime: '',
    });

    // You can store data persistently in localStorage if needed
    localStorage.setItem('roomData', JSON.stringify(roomData));
  };

  return (
    <div className="room-form">
      <h2>Create Your Room</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={room.title}
          onChange={handleChange}
        />

        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={room.subject}
          onChange={handleChange}
        />

        <label htmlFor="host">Host:</label>
        <input
          type="text"
          id="host"
          name="host"
          value={room.host}
          onChange={handleChange}
        />

        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={room.date}
          onChange={handleChange}
        />

        <label htmlFor="startTime">Start Time:</label>
        <input
          type="time"
          id="startTime"
          name="startTime"
          value={room.startTime}
          onChange={handleChange}
        />

        <label htmlFor="endTime">End Time:</label>
        <input
          type="time"
          id="endTime"
          name="endTime"
          value={room.endTime}
          onChange={handleChange}
        />

        <button type="submit">Create Room</button>
      </form>
      <Link to="/home">Go back to Home</Link>
    </div>
  );
}

export default RoomForm;
