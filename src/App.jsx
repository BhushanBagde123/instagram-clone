import React from 'react'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layouts/Layout'
import Explor from './pages/Explor'
import Profile from './pages/Profile'
import InboxPage from './pages/InboxPage'
import Reels from './pages/Reels'


const route =createBrowserRouter([
  {
    element:<Layout/>,

    children:[{
      path:'/',
      element:<Home/>
    },{
      path:'/explor',
      element:<Explor/>
    },{
      path:'/profile',
      element:<Profile/>
    },{
      path:'/inbox',
      element:<InboxPage/>
    },{
      path:'/reel',
      element:<Reels/>
    }]
  }
])
const App = () => {
  return (
    <RouterProvider router={route} />
  )
}

export default App