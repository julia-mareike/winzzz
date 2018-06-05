export const jobseeker = (state) => {
  let jobseeker = 'Jobseeker!'
  const kids = state.tamariki === 'kids'
  const single = state.relationship === 'single'
  const working = state.partner === 'working'
  const athome = state.housing === 'athome' && state.age === 'under20'
  const late20splus = state.age === 'late20splus'

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

  return jobseeker
}

export const calculateAccommodation = (total) => {
  const board = ((total * 0.62) - 54) * 0.7
  const rent = (total - 54) * 0.7
  return [Math.ceil(board), Math.ceil(rent)]
}
