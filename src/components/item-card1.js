import React from 'react'

import PropTypes from 'prop-types'

const ItemCard1 = (props) => {
  return (
    <div className="item-card-container">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="item-card-image"
      />
      <div className="item-card-content">
        <h3 className="item-card-name">{props.name}</h3>
        <div className="item-card-stars">
          <svg viewBox="0 0 1024 1024" className="item-card-star-yellow">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="item-card-star-yellow">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="item-card-star-yellow">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="item-card-star-yellow">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="item-card-star-yellow">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
        </div>
        <div className="item-card-price">
          <span>{props.currency}</span>
          <span>{props.value}</span>
        </div>
      </div>
    </div>
  )
}

ItemCard1.defaultProps = {
  value: '429',
  image_src:
    'https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxmb29kfGVufDB8fHx8MTYyNjQ0OTIzNQ&ixlib=rb-1.2.1&w=1500',
  currency: '$',
  name: 'Project Title',
  image_alt: 'image',
}

ItemCard1.propTypes = {
  value: PropTypes.string,
  image_src: PropTypes.string,
  currency: PropTypes.string,
  name: PropTypes.string,
  image_alt: PropTypes.string,
}

export default ItemCard1
