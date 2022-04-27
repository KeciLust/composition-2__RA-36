import React from 'react'
import PropTypes from 'prop-types'

function Card(props) {
  const {card} = props;
  return (
    <div className='' style={card.style}>
      <h3>{card.title}</h3>
      {card.children}
    </div>
  )
}

Card.propTypes = {
  card: PropTypes.object.isRequired,
}

export default Card
