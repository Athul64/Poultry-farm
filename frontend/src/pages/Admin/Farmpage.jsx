import React from 'react'
import Farm from '../../Components/Admin/Farm/Farm'
import Header from '../../Components/Admin/Header/Header'
import Sidebar from '../../Components/Admin/Sidebar/Sidebar'

function Farmpage() {
  return (
    <div>
    <Header/>
    <Sidebar/>
    <Farm/> 
    </div>
  )
}

export default Farmpage