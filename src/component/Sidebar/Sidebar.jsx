import React from 'react'
import Logo from '../Logo/Logo'
import '../Sidebar/Sidebar.css'
import AppNav from '../AppNav/AppNav'
import { Outlet } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Logo />
      <AppNav />
      <p>List of cities</p>
      <Outlet />
      <footer className='footer'>
        <p className=' copyright'>
          &copy;Copyright {new Date().getFullYear()}by worldwise.inc
        </p>
      </footer>
    </div>
  )
}
