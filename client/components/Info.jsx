import React from 'react'

const Info = props => {
  return (
    <div>
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

export default Info
