import React from 'react'
import Section from './Section'

class App extends React.Component {
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
    return (
      <div className='tangata'>
        <img src="face.png" alt="A nice face" />
        <Section name='relationship' id={['single', 'partner']} handleClick={this.handleClick} />
        <Section name='tamariki' id={['kids', 'nokids']} handleClick={this.handleClick} />

        {(this.state.relationship === 'partner' && this.state.tamariki === 'kids') &&
          <Section name='partner' id={['working', 'notworking']} handleClick={this.handleClick} />}

        {(this.state.relationship === 'single' && this.state.tamariki === 'nokids') &&
          <Section name='age' id={['under20', 'early20s', 'late20splus']} handleClick={this.handleClick} />}

        {(this.state.age === 'under20') &&
          <Section name='housing' id={['athome', 'awayfromhome']} handleClick={this.handleClick} />}
      </div>
    )
  }
}

export default App
