import React from 'react'
import'../styles/serviceCard.css';
export default function ServiceCard(props) {
  return (
    <>
    <div className="card serviceCard">
    <div className="card-body">
    <h6 className="card-title text-white text-center mt-md-4 heading">{props.heading}</h6>
    <p className="card-text text-muted para">{props.detail}</p>
   <img src={props.image} alt={props.alt} width="100%" className='mx-auto d-block'/>
  </div>
</div>  
    </>
  )
}
