import React from 'react'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layouts/Layout'
import Explor from './pages/Explor'


const route =createBrowserRouter([
  {
    element:<Layout/>,

    children:[{
      path:'/',
      element:<Home/>
    },{
      path:'/explor',
      element:<Explor/>
    }]
  }
])
const App = () => {
  return (
    <RouterProvider router={route} />
  )
}

export default App