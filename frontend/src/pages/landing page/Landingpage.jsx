import React from 'react'
import './landingpage.css'
import heroimg from '../../assets/Hero Image.png'
import LandingNavBar from '../../component/landingnavbar/LandingNavBar'

function Landingpage() {
  return (
    <>
    <LandingNavBar/>
    <div className='landingpage'>
        <div className='hero'>
            <h1>Unlock Your Focus Potential with FocusPal</h1>
            <p>
            Welcome to Focus Pal, where productivity meets community. In a world full of distractions, we understand the struggle of staying focused on your tasks. That's why we've created a space where you can join like-minded individuals in challenging Pomodoro sessions. 
            </p>
            <p>
                Join a Community of Motivated Indivuals Now
            </p>
            <div>
                <button>Sign Up</button>
            </div>
        </div>
        <div className='heroImg'>
            <img src={heroimg}/>
        </div>
    </div>
    </>
  )
}

export default Landingpage