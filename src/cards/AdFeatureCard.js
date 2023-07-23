import React from 'react'

const AdFeatureCard = (props) => {
  return (
    <div>
    <img src={props.image} alt='Feature'></img>

    <br></br>

    <p class="font-bold">{props.title}</p>
    <p>
     {props.desc}
    </p>
  </div>
  )
}

export default AdFeatureCard