import React from 'react'
import { Link } from 'react-router-dom'
import './landingnavbar.css'

function LandingNavBar() {
  return (
    <div className='LandingNavbar'>
        <div>
            <h1>Focus Pal</h1>
        </div>
        <div>
                <Link to='/login'>
                    <button>Log In</button>
                </Link>
        </div>

    </div>
  )
}

export default LandingNavBar