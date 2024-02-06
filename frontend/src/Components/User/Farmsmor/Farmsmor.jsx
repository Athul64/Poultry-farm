import React from 'react'
import './Farmsmor.css'
import { Link } from 'react-router-dom'


function Farmsmor() {

  return (
    <div>
    <div className='mmop'>
    Mortality Management
    </div>
    <div className='yplf'>
    Your Farm
    </div>
    <Link to='/mortality'>
    <div className='chdfo'>
    1.ChickenHubOne - License ID:2332
    </div>
    </Link>
    <Link to='/mortality'>
    <div className='dfdd'>
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

export default Farmsmor
 