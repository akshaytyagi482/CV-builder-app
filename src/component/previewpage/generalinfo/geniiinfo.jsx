import React from 'react'

const Geniiinfo = ({generalinfo,blankimg}) => {
  return (
    <div className='h-44 bg-blue-400 w-full flex items-center p-4 justify-between'>
        <div className='flex items-center gap-4'> <img className='rounded-full h-32' src={generalinfo.photo? generalinfo.photo:blankimg} alt="" />
          <span className='text-2xl'>{generalinfo.name}</span>
        </div>
        <div className='flex flex-col items-end gap-2'>
            <div className='text-sm flex gap-1'><i className="text-sm fa-solid fa-location-dot"></i>{generalinfo.address}</div>
            <div className='text-sm flex gap-1'><i className=" text-sm fa-solid fa-phone"></i>{generalinfo.phone}</div>
            <div className='text-sm flex gap-1'><i className="text-sm fa-solid fa-envelope"></i>{generalinfo.email}</div>
        </div>
    </div>
  )
}

export default Geniiinfo