import React from 'react'

import PropTypes from 'prop-types'

import './pricing.css'

const Pricing = (props) => {
  return (
    <div
      className={`pricing-container item-card-price ${props.rootClassName} `}
    >
      <span className="">{props.text}</span>
      <span className="">{props.text1}</span>
    </div>
  )
}

Pricing.defaultProps = {
  text1: '654',
  rootClassName: '',
  text: '$',
}

Pricing.propTypes = {
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default Pricing
