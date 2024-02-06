import React from 'react'
import './Farmsfeed.css'
import { Link } from 'react-router-dom';


function Farmsfeed() {
  return (
    <div>
    <div className='fmq'>
    Feed Management
    </div>
    <div className='yfw'>
    Your Farm
    </div>
    <Link to='/feed'>
    <div className='erty'>
    1.ChickenHubOne - License ID:2332
    </div>
    </Link>
    <Link to='/feed'>
    <div className='chui'>
    2.ChickenHub - License ID:1332
    </div>
    </Link>
    <div className='navitems'>
    <Link to='/add'><span>Add Farm Details</span></Link>
    <Link to='/farmsfeed'><span>Feed Management</span></Link>
    <Link to='/farmsmed'><span>Medicine Management</span></Link>
    <Link to='/farmsmor'><span>Mortality Tracking</span></Link>
    <Link to='/help'><span>Help & Support</span></Link>
  </div>
    </div>
  )
}

export default Farmsfeed