import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <div className='Navbar'>
        <div>
            <h1>Focuspal</h1>
        </div>
        <div>
            <a>Profile</a>
            <button>Log Out</button>
        </div>
    </div>
  )
}

export default Navbar