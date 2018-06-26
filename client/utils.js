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
  const minimum = calculateMin(state)
  const max = calculateMax(state)
  const abatement = calculateAbatement(state)
  const maxIncome = checkIncome(state)
  const board = (((state.costs * 0.62) - minimum) * 0.7) - abatement
  const rent = ((state.costs - minimum) * 0.7) - abatement
  let result = [checkMax(board, max), checkMax(rent, max)]
  result = maxIncome ? [0, 0] : result
  return result
}

const calculateMin = (state) => {
  const minimum = state.relationship
    ? (state.parent
      ? (state.superVet
        ? 152
        : 119)
      : 90)
    : (state.parent
      ? 107
      : 54)
  return minimum
}

const calculateMax = (state) => {
  const thresholds = state.relationship
    ? (state.parent
      ? [0, 305, 220, 160, 120]
      : [0, 235, 155, 105, 80])
    : (state.parent
      ? (state.children
        ? [0, 305, 220, 160, 120]
        : [0, 235, 155, 105, 80])
      : [0, 165, 105, 80, 70])
  const maximum = thresholds[state.area[1]]
  return maximum
}

const calculateAbatement = (state) => {
  const threshold = state.relationship
    ? (state.parent
      ? 630
      : 593)
    : (state.parent
      ? 558
      : 388)
  let excess = (Number(state.income) - threshold) * 0.25
  excess = excess > 0 ? excess : 0
  return excess
}

const checkIncome = (state) => {
  const thresholds = state.relationship
    ? (state.parent
      ? [0, 1850, 1510, 1270, 1110]
      : [0, 1533, 1213, 1013, 913])
    : (state.parent
      ? (state.children
        ? [0, 1778, 1438, 1198, 1038]
        : [0, 1498, 1178, 978, 878])
      : [0, 1048, 808, 708, 668])
  const maximum = thresholds[state.area[1]]
  const assets = checkAssets(state)
  // check assets > assetLimit
  // const maxAssets =
  const maxIncome = (Number(state.income) + assets) > maximum
  // return (maxIncome && maxAssets)
  console.log(maxIncome, (Number(state.income) + assets))
  return (maxIncome)
}

const checkAssets = (state) => {
  const assetLimit = state.relationship
    ? [5400, 16200]
    : (state.parent
      ? [5400, 16200]
      : [2700, 8100])
  console.log(assetLimit)
  const assets = state.assets > assetLimit[0] // high enough to affect income
    ? (state.assets > assetLimit[1] // higher than max assets
      ? assetLimit[1] // return maximum or max out limit
      : (state.assets - assetLimit[0]) * 0.25 // calculate difference --> state.assets - assetLimit[0] * 0.25 (25 cents per dollar)
    )
    : 0 // no difference
  console.log(assets, typeof assets)
  return assets
}

const checkMax = (cost, max) => {
  cost = cost > 0
    ? (cost > max
      ? max
      : Math.ceil(cost))
    : 0
  cost = isNaN(cost) ? '' : cost
  return cost
}
