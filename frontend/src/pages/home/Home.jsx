import React, { useState } from 'react';
import {useAuthStatus} from '../../component/hooks/useAuthStatus';
import styles from './home.css';
import Navbar from '../../component/Navbar/Navbar'
import RoomItem from '../../component/Room Item/RoomItem';
import Ribbon from '../../component/Option Ribbon/Ribbon';

function Home() {
  const [filter, setFilter] = useState('all');
  const handleFilter = (filterType) => {
    setFilter(filterType);
  };

  const {isLoading, isAuthorized, username} = useAuthStatus();

  if (isLoading) {
      return null;
  }
  const authorizedBody = 
  <>
      <Navbar/>
      <div className='Home'>
        <Ribbon handleFilter={handleFilter}/>
        <div className='rooms'>
          <RoomItem filter={filter}/>
        </div>
      </div>
    </>

  const unauthorizedBody = 
  <>
      You have not logged in and cannot view the dashboard.
      <br/><br/>
      <a href="/" className={styles.link}>Login to continue.</a>
  </>



  return (
    <div className="home">
      <div className="message">
          { isAuthorized ? authorizedBody : unauthorizedBody }
      </div>
  </div>
  )
}

export default Home