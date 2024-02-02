import React from 'react';
import './Home.css';

function Home() {
  return (
    <div>
      <div className='userlist'>User List</div>
      <div className='usertable'>
        <tableusertable>
          <thead>
            <tr>
              <th>User Name</th>
              <th>Email Id</th>
              <th>Phone Number</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Damon</td>
              <td>damon1864@gmail.com</td>
              <td>6045789655</td>
              <td>
                <button className='Blockbutton'>Block</button>
                <button className='Detailsbutton'>Details</button>
              </td>
            </tr>
            <tr>
            <td>Damon</td>
            <td>damon1864@gmail.com</td>
            <td>6045789655</td>
            <td>
            <button className='Blockbutton'>Block</button>
            <button className='Detailsbutton'>Details</button>
            </td>
          </tr>
          </tbody>
        </tableusertable>
      </div>
    </div>
  );
}

export default Home;
