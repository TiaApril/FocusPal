import React from 'react'
import PomodoroClock from '../../component/PomodoroClock/PomodoroClock'

function Room({ match }) {
  const roomId = match.params.id;
  return (
    <>
    <div>
      <h1>Welcome</h1>
      <p>Room ID: {roomId}</p>
      {/* Add more room details here */}
    </div>
    <div>
      <PomodoroClock/>
    </div>
    </>
  )
}

export default Room