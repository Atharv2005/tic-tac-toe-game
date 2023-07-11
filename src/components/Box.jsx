import React from 'react'
import "./Box.css"

function Box({ index, value, onClick }) {
  return (
    <div>
      <button className='box' onClick={() => onClick(index)}>{value}</button>
    </div>
  )
}

export default Box

