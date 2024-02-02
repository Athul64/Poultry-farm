import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import UserRouter from './Routes/userRouter';
import AdminRouter from './Routes/AdminRouter';
import UserRouter from './Routes/UserRouter'


const App = () => {

  return (

    <BrowserRouter>
    <Routes>
      <Route path="/admin/*" element={<AdminRouter />} />
      <Route path='/*' element={<UserRouter />}/>
     
    </Routes>
    </BrowserRouter>

  );
};

export default App;
