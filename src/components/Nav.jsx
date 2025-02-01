import React from 'react'
import { MdHomeFilled } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { MdOutlineExplore } from "react-icons/md";
import { TfiVideoClapper } from "react-icons/tfi";
import { FaTelegramPlane } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineAddBox } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { NavLink } from 'react-router-dom'; 

const Nav = () => {
  return (
    <div className='h-screen w-60 border-r-[1px] p-5 z-20 sticky top-0 left-0 bg-black'>
      <div className='w-full px-4 text-xl font-bold capitalize'>
        <h1>instagram</h1>
      </div>
      <div className='w-full h-full p-4'>
        <ul className='w-full flex flex-col gap-4 h-full capitalize'>
          <NavLink to="/" className="flex gap-3 items-center hover:bg-gray-700 p-1 rounded-sm">
            <MdHomeFilled size={32} /> home
          </NavLink>

          <li className='flex gap-3 items-center hover:bg-gray-700 p-1 rounded-sm'>
            <FiSearch size={32} />search
          </li>

          <NavLink to="/explor" className="flex gap-3 items-center hover:bg-gray-700 p-1 rounded-sm">
            <MdOutlineExplore size={34} />explore
          </NavLink>

          <li className='flex gap-3 items-center hover:bg-gray-700 p-1 rounded-sm'>
            <TfiVideoClapper size={32} />reels
          </li>

          <li className='flex gap-3 items-center hover:bg-gray-700 p-1 rounded-sm'>
            <FaTelegramPlane size={32} />messages
          </li>

          <li className='flex gap-3 items-center hover:bg-gray-700 p-1 rounded-sm'>
            <IoIosHeartEmpty size={32} />notification
          </li>

          <li className='flex gap-3 items-center hover:bg-gray-700 p-1 rounded-sm'>
            <MdOutlineAddBox size={32}/>create
          </li>

          <li className='flex gap-3 items-center hover:bg-gray-700 p-1 rounded-sm'>
            <CgProfile size={32}/>profile
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Nav
