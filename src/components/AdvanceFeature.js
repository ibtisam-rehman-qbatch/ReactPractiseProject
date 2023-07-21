import React from 'react'

const AdvanceFeature = (props) => {
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

export default AdvanceFeature