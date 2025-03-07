import React from 'react'
import AppNav from '../../component/AppNav/AppNav'
import { Sidebar } from '../../component/Sidebar/Sidebar'
import '../AppLayOut/AppLayOut.css'
import Map from '../../component/Map/Map'

const AppLayout = () => {
  return (
    <>
      <div className='app'>
        {' '}
        <Sidebar />
        <Map />
      </div>
    </>
  )
}

export default AppLayout
