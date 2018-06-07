import React from 'react'

const Section = props => {
  return (
    <div className={`section ${props.flex}`}>
      {props.id.map(item => {
        return <p key={item}>
          <input id={item} name={props.name} type={props.type} value={item} onClick={props.handleClick} />
          <label className={`label ${item}`} htmlFor={item}></label>
        </p>
      })}
    </div>
  )
}

export default Section
