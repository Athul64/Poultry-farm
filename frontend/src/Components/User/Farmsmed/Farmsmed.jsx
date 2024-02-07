import React from 'react'
import './Farmsmed.css'
import { Link } from 'react-router-dom';


function Farmsmed() {
  return (
    <div>
    <div className='mmg'>
    Medicine Management
    </div>
    <div className='yff'>
    Your Farm
    </div>
    <Link to='/medicine'>
    <div className='chaa'>
    1.ChickenHubOne - License ID:2332
    </div>
    </Link>
    <Link to='/medicine'>
    <div className='chai'>
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

export default Farmsmed