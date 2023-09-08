import React from 'react'
import Navbar from '../Component/Navbar'
import Textfrom from '../Component/Textfrom'
import { useState } from 'react'
export default function Home() {
  const [mode, setMode] = useState('light')
    const toggle = () => {
        if (mode==="dark") {
            setMode('light')
            document.body.style.backgroundColor = "white"
        }else {
            setMode('dark')
            document.body.style.backgroundColor = "black"
        }
    }
  return (
    <>
        <Navbar mode={mode} toggle={toggle}/>
        <div className="container">
        <Textfrom mode={mode} toggle={toggle}/>
        </div>
    </>
  )
}
