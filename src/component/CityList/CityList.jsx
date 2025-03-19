import React from 'react'
import Spinner from '../Sppinner/Spinner'
import Cityitem from '../CityItem/Cityitem'
import '../CityList/CityList.css'

const CityList = ({ isLoading, cities }) => {
  if (isLoading) return <Spinner />
  return (
    <ul className='cityList'>
      {cities.map((city) => (
        <Cityitem key={city.id} city={city} />
      ))}
    </ul>
  )
}

export default CityList
