import React from 'react'
import './Homepage.css'

import PavgeNav from '../../component/PageNav/PavgeNav'
import AppNav from '../../component/AppNav/AppNav'
import { Link, NavLink } from 'react-router-dom'
const HomePage = () => {
  return (
    <>
      <main className='homepage'>
        <PavgeNav />
        <section>
          <h1>
            your travel the world.
            <br />
            worldwise keeps track of your adventures.
          </h1>
          <h2>
            A world map that tracks your footsteps into every city you can think
            of. Never forget your wonderful experiences, and show your friends
            how you have wandered the world.
          </h2>
          <Link to='/Login' className='cta'>
            Strat tracking now
          </Link>
        </section>
      </main>
    </>
  )
}

export default HomePage
