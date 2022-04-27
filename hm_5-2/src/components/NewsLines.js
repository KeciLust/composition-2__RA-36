import React from 'react'
import PropTypes from 'prop-types'
import NewsLine from './NewsLine';

function NewsLines(props) {
    const {news} = props;
  return (
    <div className='newsLines'>
        {news.map(el => <NewsLine newsLine={el} />)}
    </div>
  )
}

NewsLines.propTypes = {
    news: PropTypes.array.isRequired,
}

export default NewsLines
