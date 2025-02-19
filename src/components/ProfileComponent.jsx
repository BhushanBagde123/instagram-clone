import React from 'react'
import { MdAdd } from "react-icons/md";
const ProfileComponent = () => {
  return (
    <div className='w-full h-auto border-b-[1px] border-gray-700 p-4 '>
    <div className='w-full h-60 flex gap-2  pt-9  '>
      <div className='w-[30%] h-[50%] flex justify-center items-center'>
      <img className='w-36 h-36 rounded-full' src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg" alt="profileImage" />
      </div>
      <div className='w-[70%] h-[60%] flex flex-col gap-6 p-4 justify-center items-center '>
        <div className='w-full flex gap-4'>
          <h1 className='font-bold text-2xl '>username</h1>
          <button className='w-24 h-10 bg-gray-800 cursor-pointer rounded-sm capitalize'>edit profile</button>
        </div>
        <div className='w-full h-16 flex gap-3'>
          <div className='flex gap-1'>
            <span>0</span>
            <h4>posts</h4>
          </div>
          <div className='flex gap-1'>
            <span>0</span>
            <h4>followers</h4>
          </div>
          <div className='flex gap-1'>
            <span>0</span>
            <h4>following</h4>
          </div>

        </div>
        <div className='w-full'>
          <h1 className='capitalize font-bold'>name</h1>
        </div>

      </div>
    </div>
    <div>

    </div>
    <div className='w-full h-32 flex  p-7 gap-1 '>
        <div className='w-22 h-22 rounded-full flex items-center border-[1px] border-gray-700 justify-center cursor-pointer '>
        <MdAdd size={48} />
        </div>
     

    </div>
  </div>
  )
}

export default ProfileComponent