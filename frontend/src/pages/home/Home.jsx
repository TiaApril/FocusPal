// // Home.js

// import React, { useState, useEffect, useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { AuthContext } from './AuthContext';

// function Home() {
//   const { user, login, logout } = useContext(AuthContext);
//   const [rooms, setRooms] = useState([]);

//   // Simulated room data (replace with actual data from your backend)
//   useEffect(() => {
//     const simulatedRooms = [
//       { id: 'room1', name: 'Study Room 1' },
//       { id: 'room2', name: 'Study Room 2' },
//     ];
//     setRooms(simulatedRooms);
//   }, []);

//   const renderRooms = () => {
//     return rooms.map((room) => (
//       <div key={room.id}>
//         <Link to={`/room/${room.id}`}>{room.name}</Link>
//       </div>
//     ));
//   };

//   const renderAuthOptions = () => {
//     if (user) {
//       return (
//         <div>
//           <p>Welcome, {user.displayName}!</p>
//           <button onClick={logout}>Logout</button>
//           {renderRooms()}
//         </div>
//       );
//     } else {
//       return (
//         <div>
//           <p>Please log in to access the rooms:</p>
//           <button onClick={login}>Login</button>
//         </div>
//       );
//     }
//   };

//   return (
//     <div>
//       <h1>Home Page</h1>
//       {renderAuthOptions()}
//     </div>
//   );
// }

// export default Home;

import React, { useState } from 'react';
import './home.css'
import Navbar from '../../component/Navbar/Navbar'
import RoomItem from '../../component/Room Item/RoomItem';
import Ribbon from '../../component/Option Ribbon/Ribbon';

function Home() {
  const [filter, setFilter] = useState('all');

  const handleFilter = (filterType) => {
    setFilter(filterType);
  };

  return (
    <>
      <Navbar/>
      <div className='Home'>
        <Ribbon handleFilter={handleFilter}/>
        <div className='rooms'>
          <RoomItem filter={filter}/>
        </div>
      </div>
    </>
  )
}

export default Home