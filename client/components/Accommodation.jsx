import React from 'react'
import Section from './Section'

import {calculateAccommodation} from '../utils'

class Accommodation extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    const total = calculateAccommodation(
      this.state.costs,
      this.state.area,
      this.state.relationship
    )
    this.setState({
      board: total[0],
      rent: total[1]
    })
  }

  handleChange ({target}) {
    const value = target.type === 'checkbox'
      ? target.checked
      : Number(target.value)
    this.setState({
      [target.name]: value
    })
  }

  render () {
    return (
      <div>
        <input type='number' name='costs' placeholder='Accommodation costs' onChange={this.handleChange}/>
        <div className='areas'>
          <Section name='area' id={[1, 2, 3, 4]} handleClick={this.handleChange} />
        </div>
        <div>
          <input type='checkbox' name='relationship' defaultChecked={false} onChange={this.handleChange} />
        In a relationship
        </div>
        <input type='button' value='Calculate' onClick={this.handleClick}/>
        <p>Board: ${this.state.board}</p>
        <p>Rent: ${this.state.rent}</p>
        <p>What's the difference between board and rent?</p>
        <p>Am I eligible for the accommodation supplement?</p>
        <p>Am I in a relationship?</p>
      </div>
    )
  }
}

export default Accommodation
