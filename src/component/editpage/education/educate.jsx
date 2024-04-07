import React, { useState } from 'react'

const Educate = ({edu,val,Deledu,setedu,education}) => {
  const [info,setinfo] = useState(edu)
  const handlechanges = (e) => {
       e.preventDefault();
      //  console.log({...edu,[e.target.name]:e.target.value})
      const newedu = {...edu,[e.target.name]:e.target.value}
       setinfo(newedu)
       let exedu = [...education]
       exedu[val]=newedu;
      setedu(exedu)
  }
  return (
    <>
    <div className='grid grid-cols-2 gap-2 w-full max-sm:grid-cols-1' val={val} >
        <input onChange={(e)=>handlechanges(e)} value={edu.uniname} placeholder='School/University Name' className='h-9 max-w-2xl rounded-md focus:outline-none p-4' type="text" name='uniname' />
        <input onChange={(e)=>handlechanges(e)} value={edu.location} placeholder='Location' className='h-9 max-w-2xl rounded-md focus:outline-none p-4' type="text" name="location" id="" />
        <input onChange={(e)=>handlechanges(e)} value={edu.from} placeholder='From' className='h-9 max-w-2xl rounded-md focus:outline-none p-4' min={1950} max={2030} type="number" name='from' />
        <input onChange={(e)=>handlechanges(e)} value={edu.to} placeholder='To' className='h-9 max-w-2xl rounded-md focus:outline-none p-4' min={1950} max={2030} type="number" name='to' />
    </div>
       <textarea onChange={(e)=>handlechanges(e)} value={edu.qualification} className='max-w-7xl w-full h-10 focus:outline-none p-2 rounded-md' placeholder='Degree/Qualification' name="qualification" id=""></textarea>
       <textarea onChange={(e)=>handlechanges(e)} value={edu.achievment} placeholder='List achievment and other information here..' className='max-w-7xl w-full h-16 focus:outline-none p-2 rounded-md' name="achievment" id=""></textarea>
       <button onClick={Deledu} className="max-w-7xl border mb-10 border-black bg-slate-500 hover:bg-slate-700 w-full h-10 p-2 rounded-md">Delete <i className="fa-solid fa-trash"></i></button>
    </>
  )
}

export default Educate