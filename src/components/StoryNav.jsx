import React, { useRef, useState } from 'react'

const StoryNav = () => {
    const silderDiv =useRef();
    const [slide,setSlider]=useState(0);
    const nextButton =()=>{
       setSlider( silderDiv.current.scrollBy(600,0))

    }
    const prevButton =()=>{
        setSlider( silderDiv.current.scrollBy(-600,0))
 
     }

  return (
    <div  className='h-24 w-[70%]  bg-pink-800 flex'>
        <button onClick={nextButton} className='z-10'>next</button>
    <div ref={silderDiv} className='h-24 w-full  bg-pink-800 gap-3 flex overflow-x-auto items-center scroll-smooth p-2 overflow-y-hidden scrollWidth  '>
       
        <div className='w-20 h-20 bg-amber-500 shrink-0 rounded-full'></div>
        <div className='w-20 h-20 bg-amber-500 shrink-0 rounded-full'></div>
        <div className='w-20 h-20 bg-amber-500 shrink-0 rounded-full'></div>
        <div className='w-20 h-20 bg-amber-500 shrink-0 rounded-full'></div>
        <div className='w-20 h-20 bg-amber-500 shrink-0 rounded-full'></div>
        <div className='w-20 h-20 bg-amber-500 shrink-0 rounded-full'></div>
        <div className='w-20 h-20 bg-amber-500 shrink-0 rounded-full'></div>
        <div className='w-20 h-20 bg-amber-500 shrink-0 rounded-full'></div>
        <div className='w-20 h-20 bg-amber-500 shrink-0 rounded-full'></div>
        <div className='w-20 h-20 bg-amber-500 shrink-0 rounded-full'></div>
       
    </div>
    <button onClick={prevButton} className='z-10'>prev</button>
     </div>
  )
}

export default StoryNav