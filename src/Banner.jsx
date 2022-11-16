import React, { useState } from 'react'
import Button from '@mui/material/Button';
import DatePicker from './DatePicker';
import './Banner.css'

function Banner() {

  const [showSearchBar, setShowSearchBar] = useState(false);

  return (
    <div className='banner'>
      <div className='banner__search'>
        {showSearchBar && <DatePicker />}
        <Button 
          className='banner__searchBtn'
          variant='outlined'
          onClick={() => setShowSearchBar(!showSearchBar)}>Search Dates</Button>
      </div>
      <div className='banner__info'>
        <h1>Live, Love and Travel</h1>
        <h5>Plan a different kind of getaway to uncover the hidden gems near you</h5>
        <Button variant='outlined'>Explore</Button>
      </div>
    </div>
  )
}

export default Banner