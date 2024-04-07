import React from 'react'
import { useState } from 'react'

const Worksec = ({work,woork,setwoork,Delwoork,val}) => {
    const [info,setinfo] = useState(woork)
    const handlechanges = (e) => {
         e.preventDefault();
        //  console.log({...edu,[e.target.name]:e.target.value})
        const newwoork = {...woork,[e.target.name]:e.target.value}
         setinfo(newwoork)
         let exedu = [...work]
         exedu[val]=newwoork;
        setwoork(exedu)
    }
    return (
      <>
      <div className='grid grid-cols-2 gap-2 w-full max-sm:grid-cols-1' val={val} >
          <input onChange={(e)=>handlechanges(e)} value={woork.compname} placeholder='Company Name' className='h-9 max-w-2xl rounded-md focus:outline-none p-4' type="text" name='compname' />
          <input onChange={(e)=>handlechanges(e)} value={woork.location} placeholder='Location' className='h-9 max-w-2xl rounded-md focus:outline-none p-4' type="text" name="location" id="" />
          <input onChange={(e)=>handlechanges(e)} value={woork.from} placeholder='From' className='h-9 max-w-2xl rounded-md focus:outline-none p-4' min={1950} max={2030} type="number" name='from' />
          <input onChange={(e)=>handlechanges(e)} value={woork.to} placeholder='To' className='h-9 max-w-2xl rounded-md focus:outline-none p-4' min={1950} max={2030} type="number" name='to' />
      </div>
         <textarea onChange={(e)=>handlechanges(e)} value={woork.role} className='max-w-7xl w-full h-10 focus:outline-none p-2 rounded-md' placeholder='Role' name="role" id=""></textarea>
         <textarea onChange={(e)=>handlechanges(e)} value={woork.description} placeholder='List Job description, responsibilities and achievment here...' className='max-w-7xl w-full h-16 focus:outline-none p-2 rounded-md' name="description" id=""></textarea>
         <button onClick={Delwoork} className="max-w-7xl border mb-10 border-black bg-slate-500 hover:bg-slate-700 w-full h-10 p-2 rounded-md">Delete <i className="fa-solid fa-trash"></i></button>
      </>
    )
  }

export default Worksec