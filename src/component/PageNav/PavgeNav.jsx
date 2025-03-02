import React from 'react'
import '../PageNav/PavgeNav.css'
import { NavLink } from 'react-router-dom'
const PavgeNav = () => {
  return (
    <>
      <nav className='nav'>
        {' '}
        <ul>
          {' '}
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            {' '}
            <NavLink to='/Pricing'>Pricing</NavLink>
          </li>
          <li>
            <NavLink to='/product'>product</NavLink>
          </li>
        </ul>
      </nav>{' '}
    </>
  )
}

export default PavgeNav
