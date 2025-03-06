import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div>
      <Link to='/'>
        <img src='/logo.png' style={{ height: '5rem' }} />
      </Link>
    </div>
  )
}

export default Logo
