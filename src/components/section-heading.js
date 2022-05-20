import React from 'react'

import PropTypes from 'prop-types'

import './section-heading.css'

const SectionHeading = (props) => {
  return (
    <div className={`section-heading-section-heading ${props.rootClassName} `}>
      <h1 className="heading-2 section-heading-h1">{props.heading}</h1>
      <span className="section-heading-subtitle">{props.subtitle}</span>
    </div>
  )
}

SectionHeading.defaultProps = {
  heading: 'TRENDING ITEMS',
  subtitle:
    'Explore our monthly most trending products, new items and the best Mobilio offers you can buy',
  rootClassName: '',
}

SectionHeading.propTypes = {
  heading: PropTypes.string,
  subtitle: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default SectionHeading
