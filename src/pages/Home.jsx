import React from 'react'
import Nav from '../components/Nav'
import StoryNav from '../components/StoryNav'
import Content from '../components/Content'
const Home = () => {
  return (
    <div className='w-full min-h-screen flex '>
        <div className='w-[60%] h-[900px] flex flex-col  bg-orange-800 '>
        <StoryNav/>
        <div className='w-full h-full flex flex-col items-center mt-4 p-3'>
        <Content/>
        </div>
       
        </div>
    </div>
  )
}

export default Home