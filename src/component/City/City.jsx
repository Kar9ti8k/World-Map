import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const City = () => {
  const [serach, setSerach] = useSearchParams()
  const lat = serach.get('lat')
  const lng = serach.get('lng')
  const { id } = useParams()
  return (
    <div>
      City:{id} Position:{lat},{lng}
    </div>
  )
}

export default City
