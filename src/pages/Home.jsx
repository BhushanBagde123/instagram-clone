import React from 'react'
import StoryNav from '../components/StoryNav'
import Content from '../components/Content'
const Home = () => {
  return (
    <div className='w-full min-h-screen flex '>
        <div className='w-[70%] h-[900px] flex flex-col  '>
        <StoryNav/>
        <div className='w-full h-auto flex flex-col items-center mt-4 p-3 gap-14'>
        <Content/>
        <Content/>
        <Content/>
        
        </div>
       
        </div>
    </div>
  )
}

export default Home