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
const BASE_URL = [
  {
    cityName: 'Lisbon',
    country: 'Portugal',
    emoji: '🇵🇹',
    date: '2027-10-31T15:59:59.138Z',
    notes: 'My favorite city so far!',
    position: {
      lat: 38.727881642324164,
      lng: -9.140900099907554,
    },
    id: '73930385',
  },
  {
    cityName: 'Madrid',
    country: 'Spain',
    emoji: '🇪🇸',
    date: '2027-07-15T08:22:53.976Z',
    notes: '',
    position: {
      lat: 40.46635901755316,
      lng: -3.7133789062500004,
    },
    id: '17806751',
  },
  {
    cityName: 'Berlin',
    country: 'Germany',
    emoji: '🇩🇪',
    date: '2027-02-12T09:24:11.863Z',
    notes: 'Amazing 😃',
    position: {
      lat: 52.53586782505711,
      lng: 13.376933665713324,
    },
    id: '98443197',
  },
  {
    cityName: 'Nijar',
    country: 'Spain',
    emoji: '🇪🇸',
    date: '2023-04-03T07:47:59.202Z',
    notes: '',
    position: {
      lat: '36.967508314568164',
      lng: '-2.13128394200588',
    },
    id: '98443198',
  },
  ,
]

const App = () => {
  const [cities, setCities] = useState([])
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
