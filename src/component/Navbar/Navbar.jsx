import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const[openNav , setOpenNav] = useState(false)
  function handleNavClick(){
    setOpenNav(!openNav)
  }

 
  return (
    <>
      <div className=" bg-slate-700 text-white fixed w-full z-20">
        <div className='flex justify-between items-center py-8 px-5 container m-auto'>
          <Link className="text-2xl font-bold md:text-3xl" to="/home">
            START FRAMEWORK
          </Link>
          <button onClick={()=>handleNavClick()}className='lg:hidden text-2xl border border-slate-800 text-slate-800 px-4 rounded-lg focus:outline focus:border-2 focus:border-slate-900 focus:outline-slate-900'>
            <i className="fa-solid fa-bars"></i>
          </button>
          <ul className=" font-bold hidden lg:gap-7 lg:flex ">
            <li>
              <NavLink to="/about" className='p-2 focus:rounded'>ABOUT</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" className='p-2 focus:rounded'>PORTFOLIO</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className='p-2 focus:rounded'>CONTACT</NavLink>
            </li>
          </ul>
        </div>
        <ul className={`click font-bold ${openNav? "h-40":"h-0"} lg:hidden  transition-all duration-500 overflow-hidden`}>
          <li className='p-2 text-lg'>
            <NavLink to="/about" className='p-2 focus:rounded'>ABOUT</NavLink>
          </li>
          <li className='p-2 text-lg'>
            <NavLink to="/portfolio" className='p-2 focus:rounded'>PORTFOLIO</NavLink>
          </li>
          <li className='p-2 text-lg'>
            <NavLink to="/contact" className='p-2 focus:rounded'>CONTACT</NavLink>
          </li>
        </ul>
      </div>
    </>
  )
}
