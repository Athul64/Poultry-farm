import React from 'react'
import './Feed.css'

function Feed() {
  return (
    <div>
    <div className='f'>
    Feed Management    
    </div>
    <div className='fill'>
    Fills the details about your feed
    </div>
    <div className='fr'>
    <label>Feed Received</label>
    <input type='text'  id='number' placeholder='No of bags'/>
    </div>
    <div className='fc'>
    <label>Feed Consumed</label>
    <input type='text'  id='number' placeholder='No of bags'/>
    </div>
    <div className='bf'> 
    <button>Submit</button>
    </div>
    <div className='frecords'>
    Feed Records
    </div>
    <div className='fmtable'>
    <tablefmtable>
    <thead>
    <th>Si.no</th>
    <th>Date</th>
    <th>Received</th>
    <th>Consumed</th>
    </thead>
    <tbody>
      <tr>
      <td>1</td>
      <td>12/02/2023</td>
      <td>4bags</td>
      <td>2bags</td>
      </tr>
      <tr>
      <td>2</td>
      <td>14/02/2023</td>
      <td>4bags</td>
      <td>2bags</td>
      </tr>
      </tbody>
    </tablefmtable>
    </div>
    </div>
  )
}

export default Feed