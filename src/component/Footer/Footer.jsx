import React from 'react'

export default function Footer() {
  return (
    <>
    <div className=' bg-slate-700 text-white'>
      <div className='grid px-10 md:grid-cols-3 gap-10 text-center container m-auto py-28'>
        <div>
            <h3 className='text-3xl font-medium pb-2'>LOCATION</h3>
            <p className='pb-3'>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
        </div>
        <div>
            <h3 className='text-3xl font-medium pb-2'>AROUND THE WEB</h3>
            <div className='flex gap-2 justify-center'>
            <div className='border border-white rounded-full px-2 py-1'>
                <i className="fa-brands fa-facebook"></i>
            </div>
            <div className='border border-white rounded-full px-2 py-1'>
                <i className="fa-brands fa-twitter"></i>
            </div>
            <div className='border border-white rounded-full px-2 py-1'>
                <i className="fa-brands fa-linkedin-in"></i>
            </div>
            <div className='border border-white rounded-full px-2 py-1'>
                <i className="fa-solid fa-globe"></i>
            </div>
            </div>
        </div>
        <div>
            <h3 className='text-3xl font-medium pb-2'>ABOUT FREELANCER</h3>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
      </div>
    </div>
    <div className=' bg-slate-800 text-white text-center py-5'>
        <p>Copyright © Your Website 2021</p>
    </div>
    </>
  )
}
