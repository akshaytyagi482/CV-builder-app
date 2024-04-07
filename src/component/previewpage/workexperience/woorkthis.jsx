import React from 'react'

const Woorkthis = ({woork,val}) => {
  return (
    <div className='h-14 flex justify-between'>
        <div className='flex flex-col gap-[2px]'>
            <div className='text-md'>{woork.compname}</div>
            <div className='text-xs'>{woork.role}</div>
            <div className='text-xs'>{woork.location}</div>
        </div>
        <div>{woork.description}</div>
        <div>{woork.from}-{woork.to}</div>
    </div>
  )
}

export default Woorkthis