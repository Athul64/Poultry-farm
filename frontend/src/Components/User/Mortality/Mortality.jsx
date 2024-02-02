import React from 'react'
import './Mortality.css'

function Mortatliy() {
  return (
    <div>
    <div className='m'>
    Mortality Management    
    </div>
    <div className='fillmo'>
    Fills the details about Mortality
    </div>
    <div className='da'>
    <label>Date</label>
    <input type='text'  id='number' placeholder='dd/mm/yy'/>
    </div>
    <div className='qu'>
    <label>Quantity</label>
    <input type='text'  id='number'/>
    </div>
    <div className='bmm'> 
    <button>Submit</button>
    </div>
    <div className='mmrecords'>
    Mortality Records
    </div>
    <div className='mtable'>
    <tablemtable>
    <thead>
    <th>Si.no</th>
    <th>Date</th>
    <th>Quantity</th>
    </thead>
    <tbody>
      <tr>
      <td>1</td>
      <td>12/02/2023</td>
      <td>2</td>
      </tr>
      <tr>
      <td>2</td>
      <td>14/02/2023</td>
      <td>4</td>
      </tr>
      </tbody>
    </tablemtable>
    </div>
    </div>
  )
}

export default Mortatliy