import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Room from './pages/room/Room'
import PomodoroClock from './component/PomodoroClock/PomodoroClock'
import Landingpage from './pages/landing page/Landingpage'
import Home from './pages/home/Home'
import Login from './component/login/Login'

function App() {
  return (
  <Router>
  <div>
      <div className="mainContainer">
          <Routes>
              <Route path='/' element={<Landingpage/>}></Route>
              <Route path='/login' element={<Login/>}></Route>
              <Route path="/home" element={<Home/>}></Route>
              <Route path='/room/:id' element={<Room/>}></Route>
          </Routes>
      </div>
    </div>
  </Router>
  )
}

export default App