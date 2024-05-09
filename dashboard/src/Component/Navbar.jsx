
import React from 'react'
import "./nav.css"
import { FaRegUserCircle } from 'react-icons/fa'
const Navbar = () => {
  return (
    <div>
          <div className='nav'>
              <div>
                  <img className='logo_khan' src="https://suhail3535.github.io/l.png" alt="" />

              </div>
              <div className='heading_div'>
                  <div id="heading">
                      <h2>Welcome to Assignment Management System</h2>
                  </div>

              </div>
              <div className='user'>
                  <FaRegUserCircle />
              </div>
      </div>
    </div>
  )
}

export default Navbar
