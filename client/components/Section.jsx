import React from 'react'

const Section = props => {
  return (
    <div>
      {props.id.map((item, idx) => {
        return <p key={idx}>
          <input id={item} name={props.name} type='radio' value={item} onClick={props.handleClick} />
          <label className={`label ${item}`} htmlFor={item}></label>
        </p>
      })}
    </div>
  )
}

export default Section
