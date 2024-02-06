import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Loginpage from '../pages/Admin/Loginpage'
import Homepage from '../pages/Admin/Homepage'
import Reportpage from '../pages/Admin/Reportpage'
import Farmpage from '../pages/Admin/Farmpage'
import Chartpage from '../pages/Admin/Chartpage'
import Adduserpage from '../pages/Admin/Adduserpage'

function AdminRouter() {
  return (
    <Routes>
    <Route path='/' element={<Loginpage />} />
    <Route path='/home' element={<Homepage/>}/>
    <Route path='/farm' element={<Farmpage/>}/>
    <Route path='/report' element={<Reportpage/>}/>
    <Route path='/chart' element={<Chartpage/>}/>
    <Route path='/adduser' element={<Adduserpage/>}/>
    </Routes>
    
  )
}

export default AdminRouter 