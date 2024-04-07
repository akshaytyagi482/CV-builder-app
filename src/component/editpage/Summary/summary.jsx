import React from 'react'

const Summary = ({sSummary,setSummary}) => {
    const handlechange = (e) =>{
        e.preventDefault();
        setSummary(e.target.value)
      }
  return (
    <div className='flex hehe flex-col max-w-4xl min-w-80 relative items-center w-2/4 p-4 mr-auto rounded-md ml-auto mb-9 bg-gray-500 gap-4'>
        <h1 className='text-2xl'>Summary</h1>
        <textarea value={sSummary} onChange={(e)=>handlechange(e)} className='max-w-7xl w-full focus:outline-none p-4 rounded-md'  placeholder='Summary' type="text" ></textarea>
    </div>
  )
}

export default Summary