import React from 'react'
import PropTypes from 'prop-types'

function NewsLine(props) {
    const {newsLine} = props;
  return (
    <div className='newsLine' key={newsLine.id}>
        <img src={newsLine.img} alt={newsLine.imgName} className='newsLineImg'/>
        <a href={newsLine.link} className='newsLineLink'>{newsLine.title}</a>
    </div>
  )
}

NewsLine.propTypes = {
    newsLine: PropTypes.object.isRequired,
}

export default NewsLine
