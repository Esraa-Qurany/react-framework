import React, { useEffect } from 'react'

export default function About() {
  useEffect(()=>{
    document.title = "About";
},[])
  return (
    <div className='bg-emerald-400 text-white'>
      <div className='container m-auto p-20 h-screen flex flex-col justify-center'>
        <div className="text-center flex justify-center items-center flex-col pb-5 ">
          <h1 className="text-3xl font-bold py-5 lg:text-4xl ">
            ABOUT COMPONENT
          </h1>
          <div className='flex items-center'>
            <div className='w-20 h-1 bg-white me-4'></div>
            <i className="fa-solid fa-star"></i>
            <div className='w-20 h-1 bg-white ms-4'></div>
          </div>
        </div>
        <div className=' flex items-center justify-center flex-col md:flex-row gap-5'>
          <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
      </div>
    </div>
  )
}
