import React from 'react'
import './roomitem.css'
import {roomData} from '../../data'

function RoomItem({ filter}) {
    const now = new Date();
    

  return (
    <div className="room-cards">
      {roomData
        .filter((room) => {
          const roomStartDate = new Date(room.date + 'T' + room.startTime);
          const roomEndDate = new Date(room.date + 'T' + room.endTime);

          // Filter out past events
          if (roomEndDate < now) {
            return false;
          }

          if (filter === 'all') {
            return true; // No filtering, display all rooms
          } else if (filter === 'happeningNow') {
            return roomStartDate <= now && roomEndDate >= now; // Filter rooms happening now
          } else if (filter === 'upcoming') {
            return roomStartDate > now; // Filter upcoming rooms
          } else {
            return room.subject === filter; // Filter by selected subject
          }
        })
        .map((room) => {
          const roomStartDate = new Date(room.date + 'T' + room.startTime);
          const roomEndDate = new Date(room.date + 'T' + room.endTime);
          return (
            <div className="room-card" key={room.id}>
              <h2>{room.title}</h2>
              <p>Subject: {room.subject}</p>
              <p>Host: {room.host}</p>
              <p>Date and Time: {room.date}, {room.startTime} - {room.endTime}</p>
              {roomStartDate <= now && roomEndDate >= now ? (
                <button className="register-button">Register</button>
              ) : (
                <button className="interested-button">Interested</button>
              )}
            </div>
          );
        })}
    </div>
  )
}

export default RoomItem