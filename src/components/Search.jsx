import React from 'react'

const Search = () => {
  return (
    <div className={`w-96 h-screen rounded-r-2xl   border-1 border-gray-700 bg-black z-30 absolute  ml-8 left-12 inset-0 `}>
        <div className='w-full h-32 border-b-1 border-gray-800'>
        <h1 className='font-bold text-4xl capitalize p-1'>search</h1>
        <div className='w-full mt-5 p-2'>
        <input className='w-full bg-gray-700 p-1' type="search" />
        </div>
        </div>
        <div className='w-full h-auto p-1 '>

          not search yet
        </div>
       
    </div>
  )
}

export default Search