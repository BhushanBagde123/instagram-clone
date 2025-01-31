import React from 'react'
import Nav from '../components/Nav'
import StoryNav from '../components/StoryNav'
const Home = () => {
  return (
    <div className='w-full min-h-screen flex relative'>
        <Nav/>
       
        <div className='w-full h-[900px] '>
        <StoryNav/>
        </div>
    </div>
  )
}

export default Home