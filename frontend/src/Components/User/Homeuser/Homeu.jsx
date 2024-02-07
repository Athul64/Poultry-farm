import React from 'react';
import './Homeu.css';
import { Link } from 'react-router-dom';

export default function Homeu() {
  return (
    <div>
      <div className='navitems'>
        <Link to='/add' className='adfd'><span>Add Farm Details</span></Link>
        <Link to='/farmsfeed' className='fdm'><span>Feed Management</span></Link>
        <Link to='/farmsmed' className='mdm'><span>Medicine Management</span></Link>
        <Link to='/farmsmor' className='mot'><span>Mortality Tracking</span></Link>
        <Link to='/help' className='hps'><span>Help & Support</span></Link>
      </div>
      <img
        src='https://img.freepik.com/free-vector/free-range-chicken-farm-concept-illustration_114360-10712.jpg?w=740&t=st=1705737132~exp=1705737732~hmac=6d6791874d2f2ac8d4fef88674a7c33b886a8cf9cc6eee39b450a9ab60b01096'
        alt='poultry farm'
      />
    </div>
  );
}
