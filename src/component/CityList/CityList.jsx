import React from 'react'
import Spinner from '../Sppinner/Spinner'
import Cityitem from '../CityItem/Cityitem'

const CityList = ({ isLoading, cities }) => {
  if (isLoading) return <Spinner />
  return (
    <ul className='cityList'>
      {cities.map((city) => (
        <Cityitem city={city} key={city.id} />
      ))}
    </ul>
  )
}

export default CityList
