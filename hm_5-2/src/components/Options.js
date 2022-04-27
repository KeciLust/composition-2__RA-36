import React from 'react'
import PropTypes from 'prop-types'
import Option from './Option';

function Options(props) {
    const {themes} = props;
  return (
    <div className='themes'>
        {themes.map(el => <Option theme={el} />)} 
    </div>
  )
}

Options.propTypes = {
    themes: PropTypes.array.isRequired,
}

export default Options
