import React, { useEffect, useState } from 'react'
import img1 from '../../assets/images/port1.png'
import img2 from '../../assets/images/port2.png'
import img3 from '../../assets/images/port3.png'

export default function Portfolio() {
  useEffect(()=>{
    document.title = "Portfolio";
},[])
  const [selectImg , setSelectImg] = useState(img1);
  const [open, setOpen] = useState(false);

    function handleImgClick(src){
      setSelectImg(src);
      setOpen(true);
    }
    
  function closeImg(){
    setOpen(false)
  }
  return (
    <>
   <div className='container m-auto pt-28 text-slate-700'>
     <div className="text-center flex justify-center items-center flex-col pb-5">
       <h1 className="text-3xl font-bold py-7 md:text-4xl ">
          PORTFOLIO COMPONENT
       </h1>
       <div className='flex items-center'>
          <div className='w-20 h-1 bg-slate-700 me-4'></div>
          <i className="fa-solid fa-star"></i>
          <div className='w-20 h-1 bg-slate-700 ms-4'></div>
       </div>
     </div>
     <div className='grid px-5 pb-5 md:grid-cols-2 lg:grid-cols-3 gap-10 text-white'>
       <div onClick={() => handleImgClick(img1)} className=' relative'>
          <div className='text-8xl flex justify-center rounded-lg items-center bg-emerald-400 absolute w-full h-full opacity-0 hover:opacity-90 transition-all duration-700'>
            <i className="fa-solid fa-plus"></i>
          </div>
          <img src={img1} alt="home" className='rounded-lg'/>
       </div>
       <div onClick={() => handleImgClick(img2)} className=' relative'>
          <div className='text-8xl flex justify-center rounded-lg items-center bg-emerald-400 absolute w-full h-full opacity-0 hover:opacity-90 transition-all duration-700'>
            <i className="fa-solid fa-plus"></i>
          </div>
          <img src={img2} alt="cake" className='rounded-lg'/>
       </div>
       <div onClick={() => handleImgClick(img3)} className=' relative'>
          <div className='text-8xl flex justify-center rounded-lg items-center bg-emerald-400 absolute w-full h-full opacity-0 hover:opacity-90 transition-all duration-700'>
            <i className="fa-solid fa-plus"></i>
          </div>
          <img src={img3} alt="circus" className='rounded-lg'/>
       </div>
       <div onClick={() => handleImgClick(img1)} className=' relative'>
          <div className='text-8xl flex justify-center rounded-lg items-center bg-emerald-400 absolute w-full h-full opacity-0 hover:opacity-90 transition-all duration-700'>
            <i className="fa-solid fa-plus"></i>
          </div>
          <img src={img1} alt="home" className='rounded-lg'/>
       </div>
       <div onClick={() => handleImgClick(img2)} className=' relative'>
          <div className='text-8xl flex justify-center rounded-lg items-center bg-emerald-400 absolute w-full h-full opacity-0 hover:opacity-90 transition-all duration-700'>
            <i className="fa-solid fa-plus"></i>
          </div>
          <img src={img2} alt="cake" className='rounded-lg'/>
       </div>
       <div onClick={() => handleImgClick(img3)} className=' relative'>
          <div className='text-8xl flex justify-center rounded-lg items-center bg-emerald-400 absolute w-full h-full opacity-0 hover:opacity-90 transition-all duration-700'>
            <i className="fa-solid fa-plus"></i>
          </div>
          <img src={img3} alt="circus" className='rounded-lg'/>
       </div> 
     </div>
   </div>
   <div onClick={closeImg} className={`open close fixed top-0 left-0 right-0 bottom-0 z-20 bg-blue-400 bg-opacity-25 ${open? 'flex' : 'hidden'} justify-center items-center`}>
      <img src={selectImg} className='w-1/2' alt="selectImg" />
   </div>
    </>
  )
}
