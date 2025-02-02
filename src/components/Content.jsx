import React from 'react'

const Content = () => {
  return (
    <div className='w-[420px] h-[650px] p-1 bg-pink-600 flex flex-col justify-between'>
      <div className='w-full h-11 bg-yellow-600 flex gap-1.5 items-center p-3'>
       <div className='w-8 h-8 bg-black rounded-full'></div>
       <div>
        <h1>name</h1>
       </div>
      </div>
      <div className='w-full h-[70%] bg-red-400'>
        <img className='w-full h-full' src="https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=" alt="" />
      </div>
      <div className='w-full h-[20%] bg-gray-500'>

      </div>
    </div>
  )
}

export default Content