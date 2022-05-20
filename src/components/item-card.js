import React from 'react'

import PropTypes from 'prop-types'

import Rating from './rating'
import Pricing from './pricing'
import './item-card.css'

const ItemCard = (props) => {
  return (
    <div className="item-card-container">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="item-card-image"
      />
      <div className="item-card-container item-card-content">
        <h1 className="item-card-name">{props.heading}</h1>
        <Rating rootClassName="rating-root-class-name3" className=""></Rating>
        <Pricing
          rootClassName="pricing-root-class-name1"
          className=""
        ></Pricing>
      </div>
    </div>
  )
}

ItemCard.defaultProps = {
  image_src:
    'https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fGNoYWlyfGVufDB8fHx8MTY1MjgxODE4OQ&ixlib=rb-1.2.1&w=1500',
  heading: 'Heading',
  rootClassName: '',
  image_alt: 'image',
}

ItemCard.propTypes = {
  image_src: PropTypes.string,
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
}

export default ItemCard
