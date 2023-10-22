import React from 'react';
import { AddToCalendarButton } from 'add-to-calendar-button-react';
import './roomitem.css';
import { roomData } from '../../data';

function RoomItem({ filter }) {
  const now = new Date();

  // Sort roomData by date in ascending order (nearest date first)
  roomData.sort((roomA, roomB) => {
    const roomStartDateA = new Date(roomA.date + 'T' + roomA.startTime);
    const roomStartDateB = new Date(roomB.date + 'T' + roomB.startTime);
    return roomStartDateA - roomStartDateB;
  });

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
                
                <button className="interested-button">
                   {/* <AddToCalendarButton
                    name="Test-Event"
                    startDate="2023-05-22"
                   >Interested</AddToCalendarButton> */}
                </button>
              )}
            </div>
          );
        })}
    </div>
  );
}

export default RoomItem;
