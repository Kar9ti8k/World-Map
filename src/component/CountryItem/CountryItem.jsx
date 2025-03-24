import React from 'react'
import '../CountryItem/Counyiem.css'
const CountryItem = ({ country }) => {
  return (
    <li className='countryItem'>
      <span className=''>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  )
}

export default CountryItem
