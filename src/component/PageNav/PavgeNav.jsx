import React from 'react'
import '../PageNav/PavgeNav.css'
import { NavLink } from 'react-router-dom'
const PavgeNav = () => {
  return (
    <>
      <nav className='NavBar'>
        <ul>
          <li>
            <NavLink className='text-white' to='/Pricing'>
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink className='text-white' to='/product'>
              product
            </NavLink>
          </li>
          <li>
            <NavLink className='text-white' to='/Login'>
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default PavgeNav
