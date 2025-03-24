import React from 'react'
import Spinner from '../Sppinner/Spinner'
import Message from '../Message/message'
import '../CountryList/CountryList.css'
import CountryItem from '../CountryItem/CountryItem'
import { useCities } from '../../contexts/citiesContext'

const Countrylist = () => {
  const { cities, isLoading } = useCities()
  if (isLoading) return <Spinner />
  if (!cities.length)
    return <Message message='add your frist city on the map' />
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }]
    else return arr
  }, [])

  return (
    <ul className='countryList'>
      {countries.map((country) => (
        <CountryItem key={country.country} country={country} />
      ))}
    </ul>
  )
}

export default Countrylist
