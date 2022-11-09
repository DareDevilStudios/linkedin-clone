import React from 'react'
import './header.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SearchIcon from '@mui/icons-material/Search';
import Headericons from './Headericons';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
  return (
    <div className="header py-1 d-flex bg-dark justify-content-around sticky-top">
    
      <div className="left d-flex ms-3 align-items-center">
          <LinkedInIcon className="text-white fs-1" />
          <div className="searchpart d-flex align-items-center ms-3">
            < SearchIcon className="text-white me-2" />
            <input className="rounded px-3" type="text" name="" id="" placeholder="Search" />
          </div>
      </div>

      <div className="right d-flex justify-content-center align-items-center mt-2">
          <Headericons Icon={HomeIcon} title = "home"/>
          <Headericons Icon={PeopleIcon} title = "My Network"/>
          <Headericons Icon={WorkIcon} title = "Jobs"/>
          <Headericons Icon={ChatIcon} title = "Messaging"/>
          <Headericons Icon={NotificationsIcon} title = "Notifications"/>
          <Headericons Icon={AccountCircleIcon} title = "Me"/>
      </div>

    </div>
  )
}

export default Header