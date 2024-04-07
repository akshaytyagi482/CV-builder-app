import React from 'react'
import Edumantra from './edumantra'

const Education = ({education}) => {
  return (
    <div className='min-h-40 flex flex-col gap-4 w-full bg-slate-50 p-10'>
  <div className='flex h-10 gap-3 border-b-2 items-center border-b-black'>
  <i className=" text-xl fa-solid fa-graduation-cap"></i>
    <h1 className='text-2xl'>Education</h1>
  </div>
     <div className='max-w-4/5 h-auto text-sm' >{education.map((a,index)=>{return <Edumantra key={index} val={index} edu={a} />})}</div>
   </div>
  )
}

export default Education