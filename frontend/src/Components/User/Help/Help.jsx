import React from 'react';
import './Help.css';

function Help() {
  return (
    <div>
      <div className='help'>
        Help & support
      </div>
      <div className='issue'>
        What’s the issue?           
      </div>
      <div className='sbox'>
        <input type="text" id='text'/>
      </div>
      <div className='issues'>
       Additional Details.
      </div>
      <div className='bbox'>
        <input type="text" id='text'/>
      </div>
      <div className='buttonhelp'>
         <button>Submit</button>
      </div>
    </div>
  );
}

export default Help;
