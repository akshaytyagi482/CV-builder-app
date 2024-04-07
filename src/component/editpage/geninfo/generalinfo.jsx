import React from 'react'

const Geninfo = ({generalinfo,setgeneralinfo,blankprofileimg}) => {
  const handefilesubmit = (e) =>{
    e.preventDefault();
      //  console.log(e)
       setgeneralinfo({...generalinfo, photo: URL.createObjectURL(e.target.files[0])})
  }
  const handlechange = (e) =>{
    e.preventDefault();
    setgeneralinfo({ ...generalinfo,[e.target.name]:e.target.value})
  }
  return (
    <div className='flex hehe flex-col max-w-4xl min-w-80 relative items-center w-2/4 p-4 mr-auto rounded-md ml-auto mb-9 bg-gray-500 gap-4'>
       <h1 className='text-2xl'>General info</h1>
       <div className='grid grid-cols-2 gap-4 w-full max-sm:grid-cols-1'>
             <input onChange={(e)=>handlechange(e)} value={generalinfo.name} className='h-9 max-w-2xl rounded-md focus:outline-none p-4' placeholder='First & Last Name' type="text" name='name' />
             <input onChange={(e)=>handlechange(e)} value={generalinfo.phone} className='h-9 max-w-2xl rounded-md focus:outline-none p-4' placeholder='Phone' type="tel" name='phone' />
             <input onChange={(e)=>handlechange(e)} value={generalinfo.email} type="email" className='h-9 max-w-2xl rounded-md focus:outline-none p-4' placeholder='Email' name="email" id="" />
             <input onChange={(e)=>handlechange(e)} value={generalinfo.address} className='h-9 max-w-2xl rounded-md focus:outline-none p-4' placeholder='Address' type="text" name='address' />
       </div>
       <div className='w-full h-max flex flex-col items-center'>
        <label htmlFor="imageInput" className='text-black rounded-md font-medium mb-2 flex items-center hover:bg-slate-600 gap-2 p-2 border justify-center max-w-5xl w-full cursor-pointer border-black'>
        <i className="fa-solid fa-image"></i>
         <p>Upload Image</p>
        <input type="file" onChange={(e)=>handefilesubmit(e)} className='hidden' accept='.png,.svg,.jpg' placeholder='Upload Photo' name="photo" id="imageInput" />
       </label>
       </div>
       <img className='h-40 rounded-md' src={generalinfo.photo ? generalinfo.photo : blankprofileimg} alt="no img" />
    </div>
  )
}

export default Geninfo