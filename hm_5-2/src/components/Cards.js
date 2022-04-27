import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card';

function Cards(props) {
    const {cards} = props;
  return (
    <div style={cards.style}>
    {cards.map(el => (<Card card={el} />))}
    </div>
  )
}

Cards.propTypes = {
  cards: PropTypes.array.isRequired,
}

export default Cards;
