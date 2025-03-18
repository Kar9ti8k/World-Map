import React from 'react'
import Spinner from '../Sppinner/Spinner'
import Cityitem from '../CityItem/Cityitem'

const CityList = ({ isLoading, cities }) => {
  if (isLoading) return <Spinner />
  return (
    <ul className='cityList'>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} /> // Pass city data and add key prop
      ))}
    </ul>
  )
}

export default CityList
