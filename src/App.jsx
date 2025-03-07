import React from 'react'
import AppLayout from './pages/AppLayOut/AppLayout'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/Homepage/HomePage'
import Products from './pages/Product/Products'
import Pricing from './pages/Pricing/Pricing'
import PageNotFound from './pages/PageNotFound/PageNotFound'
import LogIn from './pages/LogIn/LogIn'
import { Sidebar } from './component/Sidebar/Sidebar'

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
      // children:[

      // ]
    },
    {
      path: '/Pricing',
      element: <Pricing />,
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
          element: <p>List of cities</p>,
        },
        {
          path: 'cities',
          element: <p>List of cities no</p>,
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
