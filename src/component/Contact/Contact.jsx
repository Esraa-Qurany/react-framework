import React, { useEffect } from 'react'

export default function Contact() {
  useEffect(()=>{
    document.title = "Contact";
},[])
  return (
  <>
  <div className='container m-auto pt-24 text-slate-700'>
    <div className="text-center flex justify-center items-center flex-col pb-5 ">
        <h1 className="text-3xl font-bold py-5 md:text-4xl">
          CONTACT SECTION
        </h1>
        <div className='flex items-center'>
          <div className='w-20 h-1 bg-slate-700 me-4'></div>
          <i className="fa-solid fa-star"></i>
          <div className='w-20 h-1 bg-slate-700 ms-4'></div>
        </div>
    </div>
    <div className='flex flex-col gap-6 pt-20 p-5 w-full m-auto md:w-3/5 mb-5'>
      <input type="text" placeholder='userName' htmlFor='userName' autoComplete='on' required className=' border-b rounded-md placeholder:text-slate-600 p-4 mt-2 focus-visible:outline-none focus:ring-0 border-0 focus:border-slate-200 border-slate-200' />
      <input type="age" placeholder='userAge' htmlFor='userAge' autoComplete='on' required className=' border-b rounded-md placeholder:text-slate-600 p-4 mt-2 focus-visible:outline-none focus:ring-0 border-0 focus:border-slate-200 border-slate-200 ' />
      <input type="email" placeholder='userEmail' htmlFor='userEmail'autoComplete='on' required className=' border-b rounded-md placeholder:text-slate-600 p-4 mt-2 focus-visible:outline-none focus:ring-0 border-0 focus:border-slate-200 border-slate-200 ' />
      <input type="password" placeholder='userPassword' htmlFor='userPassword' autoComplete='on' required className=' border-b rounded-md placeholder:text-slate-600 p-4 mt-2 focus-visible:outline-none focus:ring-0 border-0 focus:border-slate-200 border-slate-200 ' />
      <button className='bg-emerald-400 text-white p-2 rounded-md w-32 '>Send Message</button>
    </div>
  </div>
  </>
  )
}
