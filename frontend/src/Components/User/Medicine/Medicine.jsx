import React from 'react'
import './Medicine.css'

function Feed() {
  return (
    <div>
    <div className='m'>
     Medicine Management    
    </div>
    <div className='fillm'>
    Fills the details about your Medicine
    </div>
    <div className='d'>
    <label>Date</label>
    <input type='text'  id='number' placeholder='dd/mm/yy'/>
    </div>
    <div className='dv'>
    <label>Date of Vaccination</label>
    <input type='text'  id='number' placeholder='dd/mm/yy'/>
    </div>
    <div className='q'>
    <label>Quantity</label>
    <input type='text'  id='number' placeholder='No of bags'/>
    </div>
    <div className='mn'>
    <label>Medicine Name</label>
    <input type='text'  id='name' placeholder='No of bags'/>
    </div>
    <div className='bm'> 
    <button>Submit</button>
    </div>
    <div className='mrecords'>
    Medicine Records    
    </div>
    <div className='mmtable'>
    <tablemmtable>
    <thead>
    <th>Si.no</th>
    <th>Date</th>
    <th>Medicine Name</th>
    <th>Quantity</th>
    <th>Last Vaccination Date</th>
    </thead>
    <tbody>
      <tr>
      <td>1</td>
      <td>12/02/2023</td>
      <td>abc</td>
      <td>2</td>
      <td>13/02/2023</td>
      </tr>
      <tr>
      <td>1</td>
      <td>12/02/2023</td>
      <td>bcd</td>
      <td>1</td>
      <td>14/02/2023</td>
      </tr>
      </tbody>
    </tablemmtable>
    </div>
    </div>
  )
}

export default Feed