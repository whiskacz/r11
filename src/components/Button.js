import React, { useState } from 'react'

export default function Button( { handleClose }) {

    const [buttonColor,setButtonColor] = useState({
        background: 'transparent',
})


  return (
    <button
    style={{
        padding:"20px 20px",
        fontFamily:"Arial",
        fontSize: "50px",
        borderRadius: "5px",
        border: "none",
        transition: ".2s",
        background:`${buttonColor.background}`,
        cursor: 'pointer'
    }}
    onMouseEnter={()=>{setButtonColor({background:"#A3E3FF"})}}
    onMouseLeave={()=>{setButtonColor({background:"transparent"})}}
    
    onClick={handleClose}
    >click me</button>
  )
}
