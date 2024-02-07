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
        <Link to='/add' className='adfd'><span>Add Farm Details</span></Link>
        <Link to='/farmsfeed' className='fdm'><span>Feed Management</span></Link>
        <Link to='/farmsmed' className='mdm'><span>Medicine Management</span></Link>
        <Link to='/farmsmor' className='mot'><span>Mortality Tracking</span></Link>
        <Link to='/help' className='hps'><span>Help & Support</span></Link>
      </div>
    </div>
  )
}

export default Farmsmor
 