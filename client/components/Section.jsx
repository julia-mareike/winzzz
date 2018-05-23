import React from 'react'
// import Age from './Age'

const Section = props => {
  return (
    <div>
      {props.id.map((item, idx) => {
        return <p key={idx}>
          <input id={item} name={props.name} type='radio' value={item} onClick={props.handleClick} />
          <label className={`label ${item}`} htmlFor={item}></label>
        </p>
      })}
      {/* <input id='single' name='relationship' type='radio' value='false' onClick={this.handleClick} />
      <label className='label single' htmlFor='single'></label>
      <input id='partner' name='relationship' type='radio' value='true' onClick={this.handleClick} />
      <label className='label partner' htmlFor='partner'></label>
      <input id='nokids' name='tamariki' type='radio' value='false' onClick={this.handleClick} />
      <label className='label nokids' htmlFor='nokids'></label>
      <input id='kids' name='tamariki' type='radio' value='true' onClick={this.handleClick} />
      <label className='label kids' htmlFor='kids'></label>
      {(this.state.relationship === 'true' && this.state.tamariki === 'true') && <Age handleClick={this.handleClick} state={this.state}/>} */}
    </div>
  )
}

export default Section
