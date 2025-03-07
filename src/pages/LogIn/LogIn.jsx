import React from 'react'
import '../LogIn/LogIn.css'
import { Link } from 'react-router-dom'
import PavgeNav from '../../component/PageNav/PavgeNav'
import Button from '../../component/Button/Button'

const LogIn = () => {
  return (
    <main className='login'>
      <PavgeNav />
      <form className='form'>
        <div className='row'>
          <label>Email address</label>
          <input type='text' />
        </div>
        <div>
          {' '}
          <label htmlFor='row'>Password</label>
          <input type='text' />
        </div>
        <div className=''>
          <Button>Login</Button>
        </div>
      </form>
    </main>
  )
}

export default LogIn
