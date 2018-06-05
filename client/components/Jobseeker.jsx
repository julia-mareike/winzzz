import React from 'react'

import Section from './Section'

import {jobseeker} from '../utils'

class Jobseeker extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    const entitlement = jobseeker(this.state)
    const singleNoKids = this.state.relationship === 'single' && this.state.tamariki === 'nokids'
    const partnerAndKids = this.state.relationship === 'partner' && this.state.tamariki === 'kids'

    return (
      <div className='jobseeker'>
        <img className='face' src="face.png" alt="A nice face" />
        <div className='entitlement'>
          {entitlement}
        </div>
        <div className='tangata'>
          <Section name='relationship' id={['single', 'partner']} handleClick={this.handleClick} />
          <Section name='tamariki' id={['kids', 'nokids']} handleClick={this.handleClick} />

          {partnerAndKids &&
          <Section name='partner' id={['working', 'notworking']} handleClick={this.handleClick} />}

          {singleNoKids &&
          <Section name='age' id={['under20', 'early20s', 'late20splus']} handleClick={this.handleClick} />}

          {(singleNoKids && this.state.age === 'under20') &&
          <Section name='housing' id={['athome', 'awayfromhome']} handleClick={this.handleClick} />}
        </div>
      </div>
    )
  }
}

export default Jobseeker
