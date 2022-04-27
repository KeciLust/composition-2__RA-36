import React from 'react'
import PropTypes from 'prop-types'

function Ad(props) {
    const {ad} = props;
  return (
    <img src={ad.img} alt={ad.imgName} style={ad.style} />
  )
}

Ad.propTypes = {
    ad: PropTypes.object.isRequired,
}

export default Ad
