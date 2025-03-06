import React from 'react'
import '../AppNav/AppNav.css'
import { NavLink } from 'react-router-dom'

const AppNav = () => {
  return (
    <>
      <nav className='navBar'>AppNav</nav>
      <NavLink to='/'>go back</NavLink>
    </>
  )
}

export default AppNav
