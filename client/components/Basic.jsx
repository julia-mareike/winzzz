import React from 'react'

class Basic extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
    //    this.Function bind
  }

  render () {
    return (
      <div className='tangata'>
        <input id='single' name='relationship' type='radio' value='single' />
        <label className='label single' htmlFor='single'></label>
        <input id='partner' name='relationship' type='radio' value='partner' />
        <label className='label partner' htmlFor='partner'></label>
        <img src="face.png" alt="A nice face" />
        <input id='nokids' name='tamariki' type='radio' value='nokids' />
        <label className='label nokids' htmlFor='nokids'></label>
        <input id='kids' name='tamariki' type='radio' value='kids' />
        <label className='label kids' htmlFor='kids'></label>
      </div>
    )
  }
}

export default Basic
