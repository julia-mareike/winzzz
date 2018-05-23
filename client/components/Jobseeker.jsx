import React from 'react'

const Jobseeker = props => {
  let jobseeker = 'Jobseeker!'
  const kids = props.state.tamariki === 'kids'
  const single = props.state.relationship === 'single'
  const working = props.state.partner === 'working'
  const athome = props.state.housing === 'athome' && props.state.age === 'under20'
  const late20splus = props.state.age === 'late20splus'

  if (kids) {
    if (!single) {
      if (working) {
        jobseeker = '205.60'
      } else jobseeker = '192.25'
    } else jobseeker = '334.05'
  } else if (single) {
    if (athome) {
      jobseeker = '143.55'
    } else if (late20splus) {
      jobseeker = '215.34'
    } else jobseeker = '179.44'
  } else jobseeker = '179.44'

  return (
    <div>
      <img className='jobseeker' src="face.png" alt="A nice face" />
      {jobseeker}
    </div>
  )
}

export default Jobseeker
