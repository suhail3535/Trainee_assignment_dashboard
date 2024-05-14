import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import Student from './Pages/Student'
import Login from './Pages/Login'
import Exam from './Pages/Exam'
import Project from './Pages/Project'
const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/record" element={<Student />} />
        <Route path="/login" element={<Login />} />
        <Route path="/marks" element={<Exam />} />
        <Route path="/project" element={<Project />} />
      </Routes>

    </div>
  )
}

export default MainRoutes
