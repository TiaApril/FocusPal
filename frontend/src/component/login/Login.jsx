import React from 'react'
import "@passageidentity/passage-elements/passage-auth";

function Login() {
    console.log(process.env.REACT_APP_ID)
  return (
    <>
    <h1>Hello</h1>
    <div className="form-container">
        <passage-auth
            app-id={process.env.REACT_APP_ID}
        />
    </div>
    <script src='https://psg.so/web.js'></script>
    </>
  )
}

export default Login