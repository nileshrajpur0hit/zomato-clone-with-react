import React from 'react'
import Card from './Card'
import './card.css'
import './Allcard.css'

const CityName = [
  "Delhi Restaurant",
  "Mumbai Restaurant",
  "Bengaluru Restaurant",
  "Chennai Restaurant",
  "Kolkata Restaurant",
  "Hyderabad Restaurant",
  "Pune Restaurant",
  "Jaipur Restaurant",
  "Ahmedabad Restaurant",
  "Lucknow Restaurant",
  "Chandigarh Restaurant",
  "Bhopal Restaurant",
  "Indore Restaurant",
  "Nagpur Restaurant",
  "Surat Restaurant",
  "Patna Restaurant",
  "Ranchi Restaurant",
  "Raipur Restaurant",
  "Goa Restaurant",
  "Guwahati Restaurant",
  "Shimla Restaurant",
  "Dehradun Restaurant",
  "Agra Restaurant",
  "Varanasi Restaurant",
  "Kanpur Restaurant",
  "Mysuru Restaurant",
  "Coimbatore Restaurant",
  "Thiruvananthapuram Restaurant",
  "Kochi Restaurant",
  "Madurai Restaurant"
]


const Allcard = () => {
  return  <>
    <div className="alltabshere">
      {CityName.map((names,idx)=>(
        <Card key={idx} place={names}/>
      ))}
    </div>

  
  </>
}

export default Allcard