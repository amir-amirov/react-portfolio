import React from 'react'
import "./Title.css"

const Title = (props) => {
  return (
    <div className='title'>
        <h3>{props.subTitle}</h3>
        <h2>{props.title}</h2>        
    </div>
  )
}

export default Title