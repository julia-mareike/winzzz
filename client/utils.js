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
      } else jobseeker = '384.50 / couple'
    } else jobseeker = '334.05'
  } else if (single) {
    if (athome) {
      jobseeker = '143.55'
    } else if (late20splus) {
      jobseeker = '215.34'
    } else jobseeker = '179.44'
  } else jobseeker = '358.88 / couple'
  if (!state.relationship) {
    jobseeker = 'Jobseeker!'
  }
  return jobseeker
}

export const calculateAccommodation = (total, area, single = true) => {
  const minimum = single ? 54 : 90
  let board = ((total * 0.62) - minimum) * 0.7
  let rent = (total - minimum) * 0.7
  return [checkMax(board, area), checkMax(rent, area)]
}

const checkMax = (cost, area) => {
  const thresholds = [0, 165, 105, 80, 70]
  const max = thresholds[area]
  cost = cost > max ? max : Math.ceil(cost)
  return cost
}
