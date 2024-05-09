
import React from 'react'
import "./nav.css"
import { FaRegUserCircle } from 'react-icons/fa'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div>
          <div className='nav'>
              <div>
          <Link to={"/"}>
            <img className='logo_khan' src="https://suhail3535.github.io/l.png" alt="" />
          </Link>

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
