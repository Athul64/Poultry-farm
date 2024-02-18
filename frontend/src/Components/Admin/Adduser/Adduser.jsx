import React from 'react';
import './Adduser.css';

function Adduser() {
  return (
    <div>
      <div className='tb'>
        The Best <br/>Management App <br/><span className='blue'>For Your </span>
        <span className='green'>Farm</span>
      </div>
      <div className='username'>
        <input type='text' id='uersname' placeholder='user name'/>
      </div>
      <div className='phone'>
        <input type='tel' id='number' placeholder='phone number'/>
      </div>
      <div className='emailaddressadmin'>
        <input type='text' id='emailid' placeholder='email address'/>
      </div>
      <div className='pwad'>
        <input type='password' id='passwordid' placeholder='password'/>
      </div>
      <div className='cpwad'>
        <input type='password' id='confirmPassword' placeholder='confirm password'/>
      </div>
      <div>
         <button className='buttonau'>Add User</button>      
      </div>
    </div>
  );
}

export default Adduser
