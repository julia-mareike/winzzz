export const jobseeker = (state) => {
  const kids = state.tamariki === 'kids'
  const single = state.relationship === 'single'
  const working = state.partner === 'working'
  const athome = state.housing === 'athome' && state.age === 'under20'
  const late20splus = state.age === 'late20splus'

  const jobseeker = state.relationship
    ? kids
      ? single
        ? 334.05
        : working
          ? '205.60'
          : '384.50 / couple'
      : single
        ? athome
          ? 143.55
          : late20splus
            ? 215.34
            : 179.44
        : '358.88 / couple'
    : null
  return jobseeker
}

export const calculateAccommodation = (state) => {
  const minimum = state.relationship
    ? (state.parent
      ? (state.superVet
        ? 152
        : 119)
      : 90)
    : (state.parent
      ? 107
      : 54)
  const thresholds = state.relationship
    ? (state.parent
      ? [0, 305, 220, 160, 120]
      : [0, 235, 155, 105, 80])
    : (state.parent
      ? (state.children
        ? [0, 305, 220, 160, 120]
        : [0, 235, 155, 105, 80])
      : [0, 165, 105, 80, 70])
  const max = thresholds[state.area]
  const board = ((state.costs * 0.62) - minimum) * 0.7
  const rent = (state.costs - minimum) * 0.7
  return [checkMax(board, max), checkMax(rent, max)]
}

const checkMax = (cost, max) => {
  cost = cost > max ? max : Math.ceil(cost)
  cost = isNaN(cost) ? '' : cost
  return cost
}
