import React from 'react'

const Box = ({ id, heading, content, handleClick }) => {
  return <div>
    <div className='box' id={id} onClick={handleClick}>
      <h2>{heading}</h2>
      <p>{content}</p>
    </div>
  </div>
}

export default Box
