import React, { useEffect } from 'react'
import AppLayout from './pages/AppLayOut/AppLayout'
import axios from 'axios'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/Homepage/HomePage'
import Products from './pages/Product/Products'
import Pricing from './pages/Pricing/Pricing'
import PageNotFound from './pages/PageNotFound/PageNotFound'
import LogIn from './pages/LogIn/LogIn'
import { useState } from 'react'
import Spinner from './component/Sppinner/Spinner'
import CityList from './component/CityList/CityList'
const BASE_URL = 'http://localhost:8000'

const App = () => {
  const [cities, setCities] = useState([]) // Fixed typo in state variable name
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true)
        const res = await fetch(`${BASE_URL}/cities`)
        const data = await res.json()
        setCities(data)
      } catch (error) {
        alert('There was an error loading data...')
      } finally {
        setIsLoading(false)
      }
    }

    fetchCities()
  }, [])
  const router = createBrowserRouter([
    {
      path: '*',
      element: <PageNotFound />,
    },
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/product',
      element: <Products />,
    },
    {
      path: '/Pricing',
      element: <Pricing />,
    },
    {
      path: '/spinner',
      element: <Spinner />,
    },
    {
      path: '/Login',
      element: <LogIn />,
    },
    {
      path: '/app',
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <CityList isLoading={isLoading} cities={cities} />,
        },
        {
          path: 'cities',
          element: <CityList isLoading={isLoading} cities={cities} />,
        },
        {
          path: 'country',
          element: <p>List of country</p>,
        },
      ],
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
