import React from 'react'
import './Button.css'

function Button({type, title, disable, onClick}) {
  return (
    <button className={`btn ${
      (type === 'upgrades' &&  'upgrades') || 
      (type === 'boosters' && 'boosters') || 
      (type === 'claim' && 'claim')
    }`}
    disabled={disable}
    onClick={onClick}
    >
      {title}
      </button>
  )
}

export default Button