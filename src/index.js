import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client'
import Title from './components/Title';
import Button from './components/Button';
import Popup from './components/Popup';
import './css/index.css'

export default function R11App () {

    const title = "Magic PopUpApp"

    const [popupShow, setPopupShow] = useState(true)

    const handleClose = () => {
        setPopupShow(!popupShow)
    }
 


    useEffect(() => {
        setTimeout(()=>
        setPopupShow(true),5000)
    },[])

    return (
        <div>
        <div className='wrapper'>
            <Title name={title}/>
            <Button handleClose={handleClose}/>
        </div>
            {popupShow ? (<Popup handleClose={handleClose} />) : null}

        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<R11App />)