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
    const total = calculateAccommodation(this.state.costs, this.state.area)
    this.setState({
      board: total[0],
      rent: total[1]
    })
  }

  handleChange ({target}) {
    this.setState({
      [target.name]: Number(target.value)
    })
  }

  render () {
    return (
      <div>
        <div>
          <Section name='area' id={[1, 2, 3, 4]} handleClick={this.handleChange} />
        </div>
        <input type='number' name='costs' onChange={this.handleChange}/>
        <input type='button' value='Accommodation Supplement' onClick={this.handleClick}/>
        <p>Board: ${this.state.board}</p>
        <p>Rent: ${this.state.rent}</p>
      </div>
    )
  }
}

export default Accommodation
