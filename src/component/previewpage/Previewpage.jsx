import React from 'react'
import Main from './Main'
const Previewpage = ({blankprofileimg,generalinfo,Summary,education,woork,printkrdo}) => {
  return (
    <div className='min-h-screen pt-40 min-w-80 relative max-w-screen-2xl bg-custom-gray flex flex-col items-center'>
        <Main blankprofileimg={blankprofileimg} generalinfo={generalinfo} Summary={Summary} education={education} woork={woork} printkrdo={printkrdo}/>
    </div>
  )
}

export default Previewpage