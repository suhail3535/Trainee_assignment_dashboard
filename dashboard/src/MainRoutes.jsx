import React from 'react'
import {Routes,Route } from "react-router-dom"
import Home from './Pages/Home'
import Student from './Pages/Student'
import Login from './Pages/Login'
const MainRoutes = () => {
  return (
      <div>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/record" element={<Student />} />
              <Route path="/login" element={<Login/>} />
          </Routes>

    </div>
  )
}

export default MainRoutes
