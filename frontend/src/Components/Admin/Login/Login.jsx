import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className='login'>
      <h1>Poultry Farm</h1>
      <br />
      <div className='email-button'>
        <label>Email</label>
        <input type='email' id='email' name='email'
        placeholder='enter your email address'/>
        <br/>
      </div>
      <div>
        <label>Password</label>
        <input type='password' id='password' name='password' 
        placeholder='..................'/>
        <br/>
      </div>
      <div>
       <button className='loginb'>Login</button>
      </div><br/>
      <div>
        <button className='topright'>Login</button>
      </div>
    </div>
  );
}

export default Login;
