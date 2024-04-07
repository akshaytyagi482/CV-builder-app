import React from 'react'
import Geniiinfo from './generalinfo/geniiinfo'
import About from './aboutme/About'
import Education from './education/Education'
import Wooork from './workexperience/wooork'
import 'C:/Users/dell/Desktop/okok/src/main.css'


const Main = ({blankprofileimg,generalinfo,Summary,education,woork}) => {
  return (
    <div className='main my-5 hehe max-w-5xl w-5/12 min-w-80 bg-slate-100'>
         <Geniiinfo generalinfo={generalinfo} blankimg={blankprofileimg} />
         <About Summary={Summary} />
         <Education education={education}/>
         <Wooork woork={woork} />
    </div>
  )
}

export default Main