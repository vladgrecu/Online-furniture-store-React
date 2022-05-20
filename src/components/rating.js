import React from 'react'

import PropTypes from 'prop-types'

import './rating.css'

const Rating = (props) => {
  return (
    <div className={`rating-container item-card-stars ${props.rootClassName} `}>
      <svg viewBox="0 0 1024 1024" className="item-card-star-yellow">
        <path
          d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
          className=""
        ></path>
      </svg>
      <svg viewBox="0 0 1024 1024" className="item-card-star-yellow">
        <path
          d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
          className=""
        ></path>
      </svg>
      <svg viewBox="0 0 1024 1024" className="item-card-star-yellow">
        <path
          d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
          className=""
        ></path>
      </svg>
      <svg viewBox="0 0 1024 1024" className="item-card-star-yellow">
        <path
          d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
          className=""
        ></path>
      </svg>
      <svg viewBox="0 0 1024 1024" className="item-card-star-yellow">
        <path
          d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
          className=""
        ></path>
      </svg>
    </div>
  )
}

Rating.defaultProps = {
  rootClassName: '',
}

Rating.propTypes = {
  rootClassName: PropTypes.string,
}

export default Rating
