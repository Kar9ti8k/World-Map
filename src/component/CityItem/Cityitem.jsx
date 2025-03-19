import React from 'react'
import '../CityItem/Cityitem.css'

const Cityitem = ({ city }) => {
  const { cityName, emoji, date, id, position } = city
  return (
    <li>
      {' '}
      <div className='cityitem'>
        <span className='emoji'>{emoji}</span>
        <h3 className='name'>{cityName}</h3>
        <p className='date'>{date}</p>
      </div>
    </li>
  )
}

export default Cityitem
