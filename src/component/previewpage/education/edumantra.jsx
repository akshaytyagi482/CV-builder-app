import React from 'react'

const Edumantra = ({val,edu}) => {
  return (
    <div className='h-14 flex justify-between'>
        <div className='flex flex-col gap-[2px]'>
            <div className='text-md'>{edu.qualification}</div>
            <div className='text-xs'>{edu.uniname}</div>
        </div>
        <div>{edu.achievment}</div>
        <div>{edu.from}-{edu.to}</div>
    </div>
  )
}

export default Edumantra