import React from 'react'
import {Routes,Route } from "react-router-dom"
import Home from './Pages/Home'
import Student from './Pages/Student'
const MainRoutes = () => {
  return (
      <div>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/admin" element={<Student />} />
          </Routes>

    </div>
  )
}

export default MainRoutes
