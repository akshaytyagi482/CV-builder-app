import React from 'react'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf'
import { useState } from 'react';

const Navhelp = ({Handlesetmode,editmode,print}) => {
  const [loader, setLoader] = useState(false);
  const downloadPDF = () =>{
    const capture = document.querySelector('.main');
    setLoader(true);
    html2canvas(capture).then((canvas)=>{
      const imgData = canvas.toDataURL('img/png');
      const doc = new jsPDF('p', 'mm', 'a4');
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save('receipt.pdf');
    })
  }
  return (
    <div className='bg-[#e29578] h-10 w-full flex items-center justify-end gap-6 text-2xl px-4 shadow-2xl shadow-[#e29578] sticky'> 
     {editmode ?
      <div className='flex gap-5'>
       <button onClick={Handlesetmode}><i className="fa-solid fa-eye"></i></button> </div>
      : <div className='flex gap-5'> <button onClick={downloadPDF}><i className="fa-solid fa-floppy-disk"></i></button>
      <button onClick={Handlesetmode}><i className="fa-solid fa-pencil"></i></button>
      </div>
    }
     </div>
  )
}

export default Navhelp