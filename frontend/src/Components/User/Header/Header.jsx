import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='nav'>
      <div className='nav-title'>
      <Link to="/home" className='abcd'>Poultry farm</Link>
      </div>
      <div>
        <Link to="/" className='bcde' >Logout</Link>
      </div>
    </div>
  );
}

export default Header;
