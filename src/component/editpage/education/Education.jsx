import React from 'react'
import Educate from './educate'

const Education = ({edu,addedu,deledu,setedu}) => {
  return (
    <div  className='flex hehe flex-col max-w-4xl min-w-80 relative items-center w-2/4 p-4 mr-auto rounded-md ml-auto mb-9 bg-gray-500 gap-2'>
        <div className='flex justify-between w-full'>
            <div></div>
             <h1 className='text-2xl'>Education</h1>
             <button onClick={addedu} ><i className="text-2xl fa-solid fa-plus"></i></button>
        </div>
          {edu.length == 0 ? <div>Add a segment by clicking +</div> : ( edu.map((a,index)=>{ return <Educate key={index} edu={a} val={index} education={edu} Deledu={deledu} setedu={setedu}  />}))}
    </div>
  )
}

export default Education