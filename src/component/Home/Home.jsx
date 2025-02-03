import React, { useEffect } from 'react'
import logo from '../../assets/avataaars.svg'

export default function Home() {
  useEffect(()=>{
    document.title = "Home";
},[])
  return (
  <>
    <div className='bg-emerald-400 text-white'>
      <div className='container m-auto p-20 h-screen flex flex-col justify-center'>
        <img src={logo} alt="start freamework" className='w-60 mx-auto' />
        <div className="text-center flex justify-center items-center flex-col pb-5">
          <h1 className="text-3xl font-bold py-5 md:text-4xl ">
            START FRAMEWORK
          </h1>
          <div className='flex items-center'>
            <div className='w-20 h-1 bg-white me-4'></div>
            <i className="fa-solid fa-star"></i>
            <div className='w-20 h-1 bg-white ms-4'></div>
          </div>
        </div>
        <p className='mx-auto'>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
  </>
  )
}
