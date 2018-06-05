import React from 'react'
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
    const total = calculateAccommodation(this.state.costs)
    this.setState({
      board: total[0],
      rent: total[1]
    })
  }

  handleChange (e) {
    this.setState({
      costs: Number(e.target.value)
    })
  }

  render () {
    return (
      <div>
        <input type='number' onChange={this.handleChange}/>
        <input type='button' value='Acommodation Supplement' onClick={this.handleClick}/>
        <p>Board: ${this.state.board}</p>
        <p>Rent: ${this.state.rent}</p>
      </div>
    )
  }
}

export default Accommodation
