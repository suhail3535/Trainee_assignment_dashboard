import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import Student from './Pages/Student'
import Login from './Pages/Login'
import Exam from './Pages/Exam'
const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/record" element={<Student />} />
        <Route path="/login" element={<Login />} />
        <Route path="/marks" element={<Exam />} />
      </Routes>

    </div>
  )
}

export default MainRoutes
