import React from 'react'
import Home from '../../Components/Admin/Home/Home'
import Header from '../../Components/Admin/Header/Header'
import Sidebar from '../../Components/Admin/Sidebar/Sidebar'

function Homepage() {
  return (
    <div>
    <Header/>
    <Sidebar/>
    <Home/>
    </div>
  )
}

export default Homepage