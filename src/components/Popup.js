import React from 'react'
import { BsFillXCircleFill } from "react-icons/bs";
import '../css/Popup.css'


export default function Popup( {handleClose} ) {
  return (
    <div className="mainWrapper">
    <div className='popupWrapper'>
            <span>Popup</span>    
            <BsFillXCircleFill className='butonek' onClick={handleClose}/>    
    </div>
    </div>
  )
}
