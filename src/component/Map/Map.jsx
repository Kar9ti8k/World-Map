import React from 'react'
import '../Map/Map.css'
import { Navigate, useSearchParams } from 'react-router-dom'

const Map = () => {
  const [serach, setSerach] = useSearchParams()

  const lat = serach.get('lat')
  const lng = serach.get('lng')
  return (
    <div className='Map'>
      Map{' '}
      <h1>
        Position ,:{lat},{lng}
      </h1>
    </div>
  )
}

export default Map
