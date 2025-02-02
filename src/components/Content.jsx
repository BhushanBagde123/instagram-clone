import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { BsBookmarkFill } from "react-icons/bs";
const Content = () => {
  return (
    <div className='w-[420px] h-[680px] p-1  flex flex-col justify-between'>
      <div className='w-full h-11  flex gap-1.5 items-center p-3'>
       <div className='w-8 h-8 bg-white rounded-full'></div>
       <div>
        <h1>name</h1>
       </div>
      </div>
      <div className='w-full h-[70%]'>
        <img className='w-full h-full' src="https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=" alt="" />
      </div>
      <div className='w-full h-[20%] '>
        <div className='w-full flex justify-between p-1'>
        <div className='flex gap-3'>
        < FaRegHeart size={24}/>
        <FaRegComment size={24}/>
        <FaTelegramPlane size={24}/>
        </div>
        <div>
        <BsBookmarkFill size={24}/> 
        </div>
        </div>
        <div className='p-1'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut ratione totam quidem, doloremque error voluptatem. Temporibus, ducimus aliquid modi aperiam quisquam iure </p>
        </div>
      </div>
    </div>
  )
}

export default Content