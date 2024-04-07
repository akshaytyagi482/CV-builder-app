import React from 'react'
import Worksec from './worksec'

const Workex = ({woork,setwoork,addwoork,delwoork}) => {
  return (
    <div  className='flex hehe flex-col max-w-4xl min-w-80 relative items-center w-2/4 p-4 mr-auto rounded-md ml-auto mb-9 bg-gray-500 gap-2'>
        <div className='flex justify-between w-full'>
            <div></div>
             <h1 className='text-2xl'>Work Experience</h1>
             <button onClick={addwoork} ><i className="text-2xl fa-solid fa-plus"></i></button>
        </div>
          {woork.length == 0 ? <div>Add a segment by clicking +</div> : ( woork.map((a,index)=>{ return <Worksec key={index} woork={a} val={index} work={woork} Delwoork={delwoork} setwoork={setwoork}  />}))}
    </div>
  )
}

export default Workex