import React from 'react'
import './FootTop.css'

const FootTop = () => {
  return <>
    <div className="foottop">
        <img className='zomfootimg' src="./src/assets/footerZomato.avif" alt="" />
        <div className="btnfootdiv">
            <button className='btn1'>
            <img src="./src/assets/india.webp" alt="" />
            <p>India </p>
            <i class="fa-solid fa-v"></i>
        </button>
        <button className='btn2'>
            <i class="fa-solid fa-earth-asia"></i>
            <p>English </p>
            <i class="fa-solid fa-v "></i>
        </button>
        </div>
    </div>
  
  </>
}

export default FootTop