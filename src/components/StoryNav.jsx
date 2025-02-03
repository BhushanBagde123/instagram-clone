import React, { useRef, useState } from 'react'
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";

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
    <div  className='h-24 w-full   flex'>
        <button onClick={nextButton} className='z-10'><MdArrowForwardIos/></button>
    <div ref={silderDiv} className='h-24 w-full   gap-3 flex overflow-x-auto items-center scroll-smooth p-2 overflow-y-hidden scrollWidth  '>
       
        <div className='w-16 h-16 bg-amber-500 shrink-0 rounded-full'></div>
        <div className='w-16 h-16 bg-amber-500 shrink-0 rounded-full'></div>
        <div className='w-16 h-16 bg-amber-500 shrink-0 rounded-full'></div>
        <div className='w-16 h-16 bg-amber-500 shrink-0 rounded-full'></div>
        <div className='w-16 h-16 bg-amber-500 shrink-0 rounded-full'></div>
        <div className='w-16 h-16 bg-amber-500 shrink-0 rounded-full'></div>
        <div className='w-16 h-16 bg-amber-500 shrink-0 rounded-full'></div>
        <div className='w-16 h-16 bg-amber-500 shrink-0 rounded-full'></div>
        <div className='w-16 h-16 bg-amber-500 shrink-0 rounded-full'></div>
        <div className='w-16 h-16 bg-amber-500 shrink-0 rounded-full'></div>
       
    </div>
    <button onClick={prevButton} className='z-10'>< MdArrowBackIosNew/></button>
     </div>
  )
}

export default StoryNav