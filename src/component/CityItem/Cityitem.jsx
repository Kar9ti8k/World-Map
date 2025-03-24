import React from 'react'
import '../CityItem/Cityitem.css'
import { Link, useParams } from 'react-router-dom'

const Cityitem = ({ city }) => {
  const { cityName, emoji, date, id, position } = city

  console.log(position)

  return (
    <li>
      {' '}
      <Link
        className='cityitem'
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className='emoji'>{emoji}</span>
        <h3 className='name'>{cityName}</h3>
        <p className='date'>{date}</p>
        <button className='deleteBtn'>&times;</button>
      </Link>
    </li>
  )
}

export default Cityitem
