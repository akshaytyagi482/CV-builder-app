import React from 'react'
import Woorkthis from './woorkthis'

const Wooork = ({woork}) => {
  return (
    <div className='min-h-40 flex flex-col gap-4 w-full bg-slate-50 p-10'>
    <div className='flex h-10 gap-3 border-b-2 items-center border-b-black'>
    <i className="text-xl fa-solid fa-briefcase"></i>
      <h1 className='text-2xl'>Work Experience</h1>
    </div>
       <div className='max-w-4/5 h-auto text-sm' >{woork.map((a,index)=>{return <Woorkthis key={index} val={index} woork={a} />})}</div>
     </div>
  )
}

export default Wooork