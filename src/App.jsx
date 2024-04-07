import { useState } from 'react'
import './App.css'
import Editpage from './component/editpage/page'
import { Header } from './component/header'
import  blankprofileimg from './assets/blank_profile.png'
import Previewpage from './component/previewpage/Previewpage'
function App() {
  const [editmode,seteditmode] = useState(true)
  const Handlesetmode = () =>{
    seteditmode(!editmode)
  }
  const [generalinfo,setgeneralinfo] = useState({name: "",phone: "",email:"",address:"",photo: ""})
  const [Summary, setSummary] = useState("");
  const [education,seteducation] = useState([{uniname:"",location:"",from:"",to:"",qualification:"",achievment:""},])
  const addeduseg = () =>{
    const duplicate = [...education]
    const newseg = {uniname:"",location:"",from:"",to:"",qualification:"",achievment:""}
    duplicate.push(newseg)
    seteducation(duplicate)
  }
  const deleteseg = ()=>{
    const duplicate = [...education]
    duplicate.pop()
    seteducation(duplicate)
  }
  const [woork,setwoork] = useState([{compname:"",location:"",from:"",to:"",role:"",description:""},])
  const addwoork = () =>{
    const duplicate = [...woork]
    const newseg = {compname:"",location:"",from:"",to:"",role:"",description:""}
    duplicate.push(newseg)
    setwoork(duplicate)
  }
  const delwoork = ()=>{
    const duplicate = [...woork]
    duplicate.pop()
    setwoork(duplicate)
  }
  const printkrdo = ()=>{
    window.print();
  }
  return (
    <>
      <Header Handlesetmode={Handlesetmode} print={printkrdo} editmode={editmode}  />
      {editmode?
      <Editpage generalinfo = {generalinfo} setgeneralinfo = {setgeneralinfo} 
      blankprofileimg={blankprofileimg} sSummary={Summary} setSummary={setSummary} 
      edu={education} setedu={seteducation} addedu={addeduseg} deledu={deleteseg} woork={woork} setwoork={setwoork} addwoork={addwoork} delwoork={delwoork} />
      : <Previewpage blankprofileimg={blankprofileimg} generalinfo={generalinfo} Summary={Summary} education={education} woork={woork} printkrdo={printkrdo} /> 
      }
      </>
  )
}

export default App
