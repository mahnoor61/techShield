import React from 'react'
import css from '../styles/serviceCard.css';
export default function ServiceCard(props) {
  return (
    <>
    <div class="card">
    <div class="card-body">
    <h6 class="card-title text-white text-center mt-md-4 heading">{props.heading}</h6>
    <p class="card-text text-muted para">{props.detail}</p>
   <img src={props.image} alt={props.alt} width="100%" className='mx-auto d-block'/>
  </div>
</div>  
    </>
  )
}
