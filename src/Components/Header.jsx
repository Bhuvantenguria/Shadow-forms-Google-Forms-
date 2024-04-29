import React from 'react'
import '../Styles/Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton  } from '@mui/material';
import logo from '/images/logo.png'
import SearchIcon from '@mui/icons-material/Search'
import AppsIcon from '@mui/icons-material/Apps'
import Avatar from '@mui/material/Avatar';
import avatarImg from '/images/avatar.jpeg'
import FormDrawer from './FormDrawer';

function Header() {
  return (
    <div className='header'>

        <div className='header-info'>
            <FormDrawer/>
            <img src={logo} alt="logo" height={70} width={70}/>
            <h2>Shadow Forms</h2>

        </div>

        <div className='header-search'>
            <IconButton>
            <label htmlFor="search"><SearchIcon/></label>
            </IconButton>
            <input type="text" name='search' id = 'search'  />

        </div>

        <div className='header-right'>
            <IconButton>
                <AppsIcon style={{ color: '#fff' }}/>
            </IconButton>
            <IconButton>
                <Avatar src={avatarImg} />

            </IconButton>

        </div>

    </div>
  )
}

export default Header