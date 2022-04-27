import React from 'react'
import PropTypes from 'prop-types'

function Option(props) {
    const {theme} = props;
  return (
    <div key={theme.id} className='theme'>
        <a href={theme.link} className='themeLink'>{theme.title}</a>
    </div> 
  )
}

Option.propTypes = {
    theme: PropTypes.object.isRequired,
}

export default Option
