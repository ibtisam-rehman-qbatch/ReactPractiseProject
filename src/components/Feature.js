import React from 'react'

const Feature = (props) => {
  return (
    <div>
            <div class="rounded-full bg-blue-500 w-12 h-12 flex items-center justify-center">
              <box-icon type="solid" name={props.iconName} color="white"></box-icon>
            </div>
            <br></br>
            <p class="font-bold">{props.title}</p>
            <p>
              {props.desc}
            </p>
          </div>
  )
}

export default Feature