import React from 'react'


import './style.scss';

function Search() {
  return (
    <div className='search-block'>
      <form className='search-form'>
        <label className='search-label' htmlFor="search">جستوجو</label>
        <input className='search-input' type="text" name="search" />
      </form>
    </div>
  )
}


export default Search;