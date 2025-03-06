import React from 'react'
import AppLayout from './pages/AppLayOut/AppLayout'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/Homepage/HomePage'
import Products from './pages/Product/Products'
import Pricing from './pages/Pricing/Pricing'
import PageNotFound from './pages/PageNotFound/PageNotFound'

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
      path: '/app',
      element: <AppLayout />,
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
