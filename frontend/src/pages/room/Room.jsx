import React from 'react';
import { useParams } from 'react-router-dom';
import PomodoroClock from '../../component/PomodoroClock/PomodoroClock';
import LiveChat from '../../component/Chat/LiveChat';
import { roomData } from '../../data';
import './room.css'


function Room() {
  const { roomId } = useParams();
  const room = roomData.find((r) => r.id === parseInt(roomId));
  console.log(room)

  return (
    <div className='room'>
      <div className='room-main'>
        <PomodoroClock/>
        <LiveChat/>
      </div>
      <div className='room-description'>
            <h1>Welcome to {room.title}</h1>
            <p>Room ID: {room.id}</p>
            <p>Subject: {room.subject}</p>
            <p>Host: {room.host}</p>
            <p>Date and Time: {room.date}, {room.startTime} - {room.endTime}</p>
            {/* Add more room details here */}
          </div>
    </div>
  );
}

export default Room;
