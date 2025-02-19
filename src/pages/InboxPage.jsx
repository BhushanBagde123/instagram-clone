import React from 'react'

const InboxPage = () => {
  return (
    <div className='w-full h-screen flex'>
      <div className='w-[40%] h-full border-r-[1px] border-gray-700 p-4  '>
       <div className='w-full h-7 '> 
       <h1 className='font-bold text-3xl'>username</h1>
        </div>
        <div className='w-full h-auto mt-5 flex flex-col justify-center'>
          <img className='w-20 h-20 rounded-full' src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg" alt="profileImage" />
          <span className='text-[11px] px-2 capitalize text-gray-300'>your note</span>
        </div>
        <div className='w-full h-auto mt-4 p-3'>
          <div className='w-full'>
            <h1 className='text-xl capitalize font-bold'>messages</h1>
          </div>
          <div className='w-full h-auto overflow-y-auto overflow-x-hidden p-2'>
          <div className='flex w-full h-16 gap-4'>
            <img className='w-14 h-14 rounded-full object-center object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdZ84dKOpcrt3FgCx5MjrIH8yFjsWfrJpbvQ&s" alt="friendsProfile" />
            <h1>name</h1>
          </div>
          <div className='flex w-full h-16 gap-4'>
            <img className='w-14 h-14 rounded-full object-center object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdZ84dKOpcrt3FgCx5MjrIH8yFjsWfrJpbvQ&s" alt="friendsProfile" />
            <h1>name</h1>
          </div>
          <div className='flex w-full h-16 gap-4'>
            <img className='w-14 h-14 rounded-full object-center object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdZ84dKOpcrt3FgCx5MjrIH8yFjsWfrJpbvQ&s" alt="friendsProfile" />
            <h1>name</h1>
          </div>
          <div className='flex w-full h-16 gap-4'>
            <img className='w-14 h-14 rounded-full object-center object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdZ84dKOpcrt3FgCx5MjrIH8yFjsWfrJpbvQ&s" alt="friendsProfile" />
            <h1>name</h1>
          </div>
          <div className='flex w-full h-16 gap-4'>
            <img className='w-14 h-14 rounded-full object-center object-contain' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdZ84dKOpcrt3FgCx5MjrIH8yFjsWfrJpbvQ&s" alt="friendsProfile" />
            <h1>name</h1>
          </div>
          </div>
        
          </div> 
      </div>
      <div className='w-[60%] h-screen overflow-y-auto overflow-x-hidden'>
        
      <h1 className='font-bold text-3xl capitalize'>send messages</h1>
      </div>
    </div>
  )
}

export default InboxPage