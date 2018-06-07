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
    const total = calculateAccommodation(this.state)
    this.setState({
      board: total[0],
      rent: total[1]
    })
  }

  handleChange ({target}) {
    const value = target.type === 'checkbox'
      ? target.checked
      : target.value
    this.setState({
      [target.name]: value
    })
  }

  render () {
    return (
      <div className='accommodation'>
        <img className='costs' src='costs.png' alt='Accommodation costs' />
        <div>
          <input type='number' name='costs' min='0' placeholder='$ Costs' onChange={this.handleChange} />
        </div>
        <img className='area' src='area.png' alt='Area' />
        <div className='areas'>
          <Section name='area' type='radio' id={['a1', 'a2', 'a3', 'a4']} handleClick={this.handleChange} flex='row' />
          <a href='https://www.msd.govt.nz/about-msd-and-our-work/newsroom/2017/budget-2017/new-regions.html'>What area am I in?</a>
        </div>
        <Section name='nonbeneficiary' type='checkbox' flex='checkboxes' id={['nonbeneficiary']} handleClick={this.handleChange} />
        {(this.state.nonbeneficiary) &&
          <input type='number' name='income' min='0' placeholder='$ Income' onChange={this.handleChange} />
        }
        <Section name='relationship' type='checkbox' flex='checkboxes' id={['relationship']} handleClick={this.handleChange} />
        <Section name='parent' type='checkbox' flex='checkboxes' id={['parent']} handleClick={this.handleChange} />
        {(!this.state.relationship && this.state.parent) &&
          <Section name='children' type='checkbox' flex='checkboxes' id={['children']} handleClick={this.handleChange} />
        }
        {(this.state.relationship && this.state.parent) &&
          <Section name='superVet' type='checkbox' flex='checkboxes' id={['superVet']} handleClick={this.handleChange} />
        }
        <input type='button' value='Calculate' onClick={this.handleClick}/>
        <div className='results'>
          <p className='entitlement'>Board: ${this.state.board}</p>
          <p className='entitlement'>Rent: ${this.state.rent}</p>
        </div>
        <details>
          <summary>What's the difference between board and rent?</summary>
          <p>WINZ calculates <strong>board</strong> as consisting of 62% rent and 38% food & expenses, so will only recognise 62% of your accommodation costs.</p>
          <p><strong>Rent</strong> is 100% rent and does not include any expenses like food, power, water rates etc.</p>
        </details>
        <details>
          <summary>Am I eligible for accommodation supplement?</summary>
          <p>You don't have to be receiving a benefit to get the accommodation supplement.</p>
          <p>You need to have under $8000 cash assets to be eligible. If you aren't receiving a benefit, your entitlement will decrease when your income is higher than a certain threshold.</p>
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
