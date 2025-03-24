import React from 'react'
import '../AppNav/AppNav.css'
import { NavLink } from 'react-router-dom'

const AppNav = () => {
  return (
    <>
      <nav className='navBar'>
        <ul>
          {' '}
          <li>
            <NavLink to='cities'>cities</NavLink>
          </li>
          <li>
            <NavLink to='country'>country</NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default AppNav
