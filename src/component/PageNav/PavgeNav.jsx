import React from 'react'
import '../PageNav/PavgeNav.css'
import { NavLink } from 'react-router-dom'
import Logo from '../Logo/Logo'
const PavgeNav = () => {
  return (
    <>
      <nav className='NavBar'>
        <Logo />
        <ul>
          <li>
            <NavLink to='/Pricing'>Pricing</NavLink>
          </li>
          <li>
            <NavLink to='/product'>product</NavLink>
          </li>
          <li>
            <NavLink to='/Login' className='ctaLink'>
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default PavgeNav
