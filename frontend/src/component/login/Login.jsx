import React from 'react'
import "@passageidentity/passage-elements/passage-auth";
import './login.css'

function Login() {
    console.log(process.env.REACT_APP_ID)
  return (
    <>
    <div className="login-container">
        <passage-auth
            app-id={process.env.REACT_APP_ID} className="login"
        />
    </div>
    <script src='https://psg.so/web.js'></script>
    </>
  )
}

export default Login