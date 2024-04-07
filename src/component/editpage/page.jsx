import React from 'react'
import Geninfo from './geninfo/generalinfo'
import Summary from './Summary/summary'
import Education from './education/Education'
import Workex from './work/Workex'

const Editpage = ({generalinfo,setgeneralinfo,blankprofileimg,sSummary,setSummary,edu,addedu,deledu,setedu,woork,setwoork,addwoork,delwoork}) => {
  return (
    <div className='min-h-screen pt-40 min-w-80 relative max-w-screen-2xl bg-custom-gray flex flex-col items-center'>
        <Geninfo generalinfo={generalinfo} setgeneralinfo={setgeneralinfo} blankprofileimg={blankprofileimg}/>
        <Summary sSummary={sSummary} setSummary={setSummary}/>
        <Education edu={edu} setedu={setedu} addedu={addedu} deledu={deledu} />
        <Workex woork={woork} delwoork={delwoork} addwoork={addwoork} setwoork={setwoork} />
    </div>
  )
}

export default Editpage