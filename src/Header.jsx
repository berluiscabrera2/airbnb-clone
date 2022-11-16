import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar } from '@mui/material';
import './Header.css'

function Header() {
  return (
    <div className='header'>
        <img 
            className='header__icon' 
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png' 
            alt="website logo"
        />
        <div className='header__center'>
            <input type='text'/>
            <SearchIcon/>
        </div>
        <div className='header__menu'>
            <p>Become a host</p>
            <LanguageIcon/>
            <ExpandMoreIcon/>
            <Avatar/>
        </div>
    </div>
  )
}

export default Header