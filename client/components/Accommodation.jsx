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
        <div>
          <input type='checkbox' name='parent' defaultChecked={false} onChange={this.handleChange} />
        Parent
        </div>
        {(!this.state.relationship && this.state.parent) &&
            <div>
              <input type='checkbox' name='children' defaultChecked={false} onChange={this.handleChange} />
              2 or more children
            </div>
        }
        {(this.state.relationship && this.state.parent) &&
            <div>
              <input type='checkbox' name='superVet' defaultChecked={false} onChange={this.handleChange} />
              NZ Super or Veteran's Pension
            </div>
        }
        <input type='button' value='Calculate' onClick={this.handleClick}/>
        <p>Board: ${this.state.board}</p>
        <p>Rent: ${this.state.rent}</p>
        <details>
          <summary>What's the difference between board and rent?</summary>
          <p>WINZ calculates <strong>board</strong> as consisting of 62% rent and 38% food & expenses, so will only recognise 62% of your accommodation costs.</p>
          <p><strong>Rent</strong> is 100% rent and does not include any expenses like food, power, water rates etc.</p>
        </details>
        <details>
          <summary>Am I eligible for accommodation supplement?</summary>
          <p>Accommodation supplement isn't affected by how much you earn, but by how much savings you have - this must be under $8000.</p>
          <p>You don't have to be receiving a benefit to get the accommodation supplement.</p>
          <p>Accommodation supplement can't be used to pay for social housing properties (i.e. Housing NZ), but can be used for mortgage repayments. </p>
        </details>
        <details>
          <summary>Am I in a relationship?</summary>
          <p>"A relationship in the nature of marriage or a relationship in the nature of a civil union is a forseeable relationship in which there is at the very
          least financial interdependence and emotional commitment for the future, like a married couple."</p>
        </details>
      </div>
    )
  }
}

export default Accommodation
