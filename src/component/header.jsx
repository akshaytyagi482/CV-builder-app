import React from 'react'
import Navhelp from './navhelp';


export const Header = ({Handlesetmode,editmode,print}) => {
  return (
    <div className='fixed no-print z-20 w-full'>
    <div className='h-20 w-full bg-red-500 flex items-center justify-center'>
    <h1 className='text-4xl mx-1'>CV Builder</h1>
    <i className="text-4xl fa-solid fa-file"></i>
    </div>
    <Navhelp Handlesetmode={Handlesetmode} print={print} editmode={editmode}/>
    </div>
  );
}
