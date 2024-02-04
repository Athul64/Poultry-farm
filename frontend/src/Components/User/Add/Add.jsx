import React from 'react'
import './Add.css'

function Add() {
  return (
    <div>
    <div className='af'>
    Add farm Details
    </div>
    <div className='fn'>
    Farm Name 
    <input type='text'/>
    </div>
    <div className='fl'>
    Farm License ID
    <input type='text'/>
    </div>
    <div className='ph'>
    Phone Number
    <input type='number'/>
    </div>
    <div className='ads'>
    Address
    <input type='text'/>
    </div>
    <div className='st'>
    State
    <input type='text'/>
    </div>
    <div className='con'>
    Country
    <input type='text'/>
    </div>
    <div className='pz'>
    Post/Zip code
    <input type='text'/>
    </div><div className='pop'>
    Poultry Popultaion
    <input type='text'/>
    </div>
    <div className='ab'>
    <button>subimt</button>
    </div>
    <div className='choo'>
    1.ChickenHubOne - License ID:2332
    </div>
    <div className='chooo'>
    2.ChickenHub - License ID:1332
    </div>
    </div>
  )
}

export default Add