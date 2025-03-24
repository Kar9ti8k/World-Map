import React, { useContext } from 'react'
import { createContext, useState, useEffect } from 'react'
import axios from 'axios'
const citiesContext = createContext()

const BASE_URL = 'http://localhost:8000'

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true)
        const res = await axios.get(`${BASE_URL}/cities`)
        setCities(res.data)
      } catch (error) {
        alert('There was an error loading data...')
      } finally {
        setIsLoading(false)
      }
    }

    fetchCities()
  }, [])
  return (
    <>
      <citiesContext.Provider value={{ isLoading, cities }}>
        {children}
      </citiesContext.Provider>
    </>
  )
}
const useCities = () => {
  const context = useContext(citiesContext)
  if (context === undefined)
    throw new Error('citiesContext was used outside the citiesProvider')
  return context
}
export { CitiesProvider, useCities }
