import React from 'react'
import Spinner from '../Sppinner/Spinner'
import Cityitem from '../CityItem/Cityitem'
import '../CityList/CityList.css'
import Message from '../Message/message'
import { useCities } from '../../contexts/citiesContext'

const CityList = () => {
  const { cities, isLoading } = useCities()
  if (isLoading) return <Spinner />
  if (!cities.length)
    return (
      <Message meessage='add your first city by clicking on a city on the map' />
    )
  return (
    <ul className='cityList'>
      {cities.map((city) => (
        <Cityitem key={city.id} city={city} />
      ))}
    </ul>
  )
}

export default CityList
