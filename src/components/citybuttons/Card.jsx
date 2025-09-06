import React from 'react'
import './Card.css'


// const CityName = ['Agra Restaurant', 'Udaipur Restaurant', 'Mumbai Restaurant','Pune ']

 
const Card = (props) => {
  return <>
  
    <div className='card-div'>
      <div className="restaurant" >
        {props.place}
      </div>
      <i className="fa-solid fa-greater-than"></i>
    </div>
  
  </>
}

export default Card