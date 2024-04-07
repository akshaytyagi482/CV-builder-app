import React from 'react'

const About = ({Summary}) => {
  return (
    <div className='min-h-40 flex flex-col gap-4 w-full bg-slate-50 p-10'>
  <div className='flex h-10 gap-3 border-b-2 items-center border-b-black'>
    <i className="text-xl fa-solid fa-user"></i>
    <h1 className='text-2xl'>About me</h1>
  </div>
  <p className='max-w-4/5 h-auto text-sm'>{Summary}</p>
   </div>
  )
}

export default About