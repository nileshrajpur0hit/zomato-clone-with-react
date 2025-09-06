import React from 'react'
import './FootMid.css'

const FootMid = (props) => {
  return  <>
    <div className="midtags">
        <div className="midtabsdiv">
            <h5>{props.hname}</h5>
            <a href="">{props.items}</a>  
        </div>
         
    </div>
  
  </>
}

export default FootMid