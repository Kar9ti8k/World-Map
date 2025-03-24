import React, { useEffect } from 'react'
import AppLayout from './pages/AppLayOut/AppLayout'

import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import HomePage from './pages/Homepage/HomePage'
import Products from './pages/Product/Products'
import Pricing from './pages/Pricing/Pricing'
import PageNotFound from './pages/PageNotFound/PageNotFound'
import LogIn from './pages/LogIn/LogIn'
import { useState } from 'react'
import Spinner from './component/Sppinner/Spinner'
import CityList from './component/CityList/CityList'
import NOnen from './component/nonen/nonen'
import Countrylist from './component/CountryList/Countrylist'
import City from './component/City/City'
import { CitiesProvider } from './contexts/citiesContext'

const App = () => {
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
          element: <Navigate to='cities' />,
        },
        {
          path: 'cities/:id',
          element: <City />,
        },
        {
          path: 'cities',
          element: <CityList />,
        },
        {
          path: 'country',
          element: <Countrylist />,
        },
      ],
    },
  ])
  return (
    <>
      <CitiesProvider>
        <RouterProvider router={router} />
      </CitiesProvider>
    </>
  )
}

export default App
