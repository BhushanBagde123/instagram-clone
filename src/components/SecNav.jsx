import React from 'react'
import { MdHomeFilled } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { MdOutlineExplore } from "react-icons/md";
import { TfiVideoClapper } from "react-icons/tfi";
import { FaTelegramPlane } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineAddBox } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { NavLink } from 'react-router-dom'
import { FaSquareInstagram } from "react-icons/fa6";
import Search from './Search';
export const SecNav = ({nav,searchSwitch}) => {
  return (
    <div className={`h-screen w-60 flex flex-col gap-8 p-5 z-20 sticky top-0  left-0 bg-black ${nav?"block":"hidden"}`}>
     {nav&& <Search/>}
    <div className='w-full px-4 text-xl font-bold capitalize'>
      <FaSquareInstagram size={32} />
    </div>
   
    <div className='w-full h-full p-4 '>
      <ul className='w-full flex flex-col gap-4 h-full capitalize '>
        <NavLink to="/" className="flex gap-3 items-center  p-1 rounded-sm">
          <MdHomeFilled size={32} onClick={searchSwitch} />
        </NavLink>

        <li className='flex gap-3 items-center cursor-pointer p-1 rounded-sm'>
          <FiSearch size={32} onClick={searchSwitch} />
         
        </li>
        

        <NavLink to="/explor" className="flex gap-3 items-center  p-1 rounded-sm">
          <MdOutlineExplore size={34} onClick={searchSwitch} />
        </NavLink>

        <li className='flex gap-3 items-center  p-1 rounded-sm'>
          <TfiVideoClapper size={32} />
        </li>

        <li className='flex gap-3 items-center p-1 rounded-sm'>
          <FaTelegramPlane size={32} />
        </li>

        <li className='flex gap-3 items-center p-1 rounded-sm'>
          <IoIosHeartEmpty size={32} />
        </li>

        <li className='flex gap-3 items-center  p-1 rounded-sm'>
          <MdOutlineAddBox size={32}/>
        </li>

        <NavLink to='/profile'><li className='flex gap-3 items-center  p-1 rounded-sm'>
          <CgProfile size={32}/>
        </li>
        </NavLink>
      </ul>
    </div>
  </div>
  )
}
