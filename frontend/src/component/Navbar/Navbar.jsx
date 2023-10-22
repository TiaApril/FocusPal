import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar() {
  return (
    <div className='Navbar'>
          <h1>
            <Link to='/home'>Focuspal</Link>
          </h1>
          <Link to='/roomform'>
          <button>Make Your Room</button>
          </Link>
          
        <div>
            <a>Profile</a>
            <button>Log Out</button>
        </div>
    </div>
  )
}

export default Navbar