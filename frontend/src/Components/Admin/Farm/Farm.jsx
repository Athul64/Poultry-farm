import React from 'react';
import'./Farm.css'

function Farm() {
  return (
    <div>
      <div className="tablet1">
        <table1>
          <tbody>
                Farm name:ChickenHubOne<br/>
                License no: 2332 <br/>
                Contact no: 7485654852 <br/>
                State: Kerala <br/>
                Poultry population:1000<br/>
                <h6>click here to view deatils</h6>
          </tbody>
        </table1>
      </div>
       <div className='tablet2'>
       <table2>
        <tbody>
            Farm name : ChickenHub<br/>
            License no : 1332 <br/>
            Contact no : 8485654853 <br/>
            State : Kerala<br/>
            Poultry population : 1500<br/></tbody>
            <h6>click here to view deatils</h6>
          </table2>
       </div>
    </div>
  );
}

export default Farm