import React from 'react'
import {Link, Route} from 'react-router-dom'

import Jobseeker from './Jobseeker'
import Accommodation from './Accommodation'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
    // this.handleClick = this.handleClick.bind(this)
  }

  // handleClick (e) {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
  // }

  render () {
    return (
      <div className='app-container'>
        <Link to='/accommodation'>
          <input type='button' value='Accommodation Supplement' />
        </Link>
        <Link to='/jobseeker'>
          <input type='button' value='Jobseeker' />
        </Link>
        <Route path='/jobseeker' component={Jobseeker} />
        <Route path='/accommodation' component={Accommodation} />
      </div>
    )
  }
}

export default App
