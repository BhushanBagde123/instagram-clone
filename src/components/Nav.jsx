import React, { useState } from 'react'
import { MdHomeFilled } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { MdOutlineExplore } from "react-icons/md";
import { TfiVideoClapper } from "react-icons/tfi";
import { FaTelegramPlane } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineAddBox } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { NavLink } from 'react-router-dom'; 
import { SecNav } from './SecNav';


const Nav = () => {
  const [nav,setNav]=useState(false);
  const [secNav,setSecNav]=useState(false)

  const searchSwitch =()=>{
    setNav(!nav);
  }
  const navSwitch =()=>{
    setSecNav(!secNav);
  }
  return (
    <>
    <div className={`h-screen w-60 border-r-[1px] border-gray-700 pt-5 flex flex-col gap-6 z-20 sticky top-0 left-0 bg-black ${nav?"hidden":"block"}`}>
      <div className='w-full px-4 text-xl font-bold capitalize'>
        <h1>instagram</h1>
      </div>
      <div className='w-full h-full p-4'>
        <ul className='w-full flex flex-col gap-4 h-full capitalize'>
          <NavLink to="/" className="flex gap-3 items-center hover:bg-gray-700 p-1 rounded-sm">
            <MdHomeFilled size={32} /> home
          </NavLink>

          <li className='flex gap-3 items-center cursor-pointer hover:bg-gray-700 p-1 rounded-sm' onClick={searchSwitch}>
            <FiSearch size={32} />search
          </li>

          <NavLink to="/explor" className="flex gap-3 items-center hover:bg-gray-700 p-1 rounded-sm">
            <MdOutlineExplore size={34} />explore
          </NavLink>

          <li className='flex gap-3 items-center hover:bg-gray-700 p-1 rounded-sm'>
            <TfiVideoClapper size={32} />reels
          </li>

        <NavLink to='/inbox'>  <li className='flex gap-3 items-center hover:bg-gray-700 p-1 rounded-sm'>
            <FaTelegramPlane size={32} />messages
          </li>
          </NavLink>

          <li className='flex gap-3 items-center hover:bg-gray-700 p-1 rounded-sm'>
            <IoIosHeartEmpty size={32} />notification
          </li>

          <li className='flex gap-3 items-center hover:bg-gray-700 p-1 rounded-sm'>
            <MdOutlineAddBox size={32}/>create
          </li>

          <NavLink to='/profile'><li className='flex gap-3 items-center hover:bg-gray-700 p-1 rounded-sm'>
            <CgProfile size={32}/>profile
          </li>
          </NavLink>
        </ul>
      </div>
    </div>
    <SecNav nav={nav} searchSwitch={searchSwitch} sceNav={secNav} navSwitch={navSwitch}/>
    
    </>
  )
}

export default Nav
