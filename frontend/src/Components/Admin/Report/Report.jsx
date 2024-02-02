import React from 'react';
import './Report.css';

function Report() {
  return (
    <div>
      <div className='farmreports'>
      Farm Reports
      </div>
      <div className='feedreports'>
      Feed reports
      </div>
      <div className='feed'>
      <tablefeed>
      <thead>
      <tr>
      <th>Si.no</th>
      <th>Date</th>
      <th>Received</th>
      <th>Consumed</th>
      </tr>
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
      </tablefeed>
      </div>



      <div className='medicinereports'>
      Medicine reports
      </div>
      <div className='medicine'>
      <tablemedicine>
      <thead>
      <tr>
      <th>Si.no</th>
      <th>Date</th>
      <th>Medicine Name</th>
      <th>Quantity</th>
      <th>Last Vaccination Date</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>1</td>
      <td>12/02/2023</td>
      <td>abc</td>
      <td>2</td>
      <td>12/03/2023</td>
      </tr>
      <tr>
      <td>2</td>
      <td>14/02/2023</td>
      <td>bcd</td>
      <td>1</td>
      <td>12/03/2023</td>
      </tr>
      </tbody>
      </tablemedicine>
      </div>


      <div className='mortalityreports'>
      Mortality reports
      </div>
      <div className='mortality'>
      <tablemortality>
      <thead>
      <tr>
      <th>Si.no</th>
      <th>Date</th>
      <th>No Of Mortality</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>1</td>
      <td>12/02/2023</td>
      <td>2</td>
      </tr>
      <tr>
      <td></td>
      <td></td>
      <td></td>
      </tr>
      </tbody>
      </tablemortality>
      </div>
      </div>
  );
}

export default Report
