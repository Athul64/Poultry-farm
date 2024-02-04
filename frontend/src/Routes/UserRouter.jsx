import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Loginpage from '../pages/User/Loginpage'
import Homepage from '../pages/User/Homepage'
import Helppage from '../pages/User/Helppage'
import Farmpage from '../pages/User/Farmpage'
import Farmsmedpage from '../pages/User/Farmsmedpage'
import Farmsmorpage from '../pages/User/Farmsmorpage'
import Feedpage from '../pages/User/Feedpage'
import Medicinepage from '../pages/User/Medicinepage'
import Mortalitypage from '../pages/User/Mortalitypage'
import Addpage from '../pages/User/Addpage'

function UserRouter() {
  return (
    <Routes>
    <Route path='/' element={<Loginpage/>}/>
    <Route path='/home' element={<Homepage/>}/>
    <Route path='/help' element={<Helppage/>}/>
    <Route path='/farmsfeed' element={<Farmpage/>}/>
    <Route path='/farmsmed' element={<Farmsmedpage/>}/>
    <Route path='/farmsmor' element={<Farmsmorpage/>}/>
    <Route path='/feed' element={<Feedpage/>}/>
    <Route path='/medicine' element={<Medicinepage/>}/>
    <Route path='/mortality' element={<Mortalitypage/>}/>
    <Route path='/add' element={<Addpage/>}/>
    </Routes>
  )
}

export default UserRouter;