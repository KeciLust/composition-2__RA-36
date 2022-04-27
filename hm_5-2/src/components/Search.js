import React from 'react'
import PropTypes from 'prop-types'

function Search(props) {
    const {search} = props;
  return (
    <div className='search' style={search.style}>
        <img src={search.logo} alt={search.logoName} style={search.style.img} />
        <input className='searchInput' type='search' name='searchInput' />
        <button className='searchButton'>Найти</button>
        <label htmlFor='searchInpyt'>найдется всё!</label>
    </div>
  )
}

Search.propTypes = {
    search: PropTypes.object.isRequired,
}

export default Search
