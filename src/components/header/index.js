import React from 'react';
import Search from './search'
import UserProfile from '../userProfile'
import { NotificationIcon, SettingsIcon } from '../icons'

const Header = props => {
  return <div className="d-flex header-block border-bottom align-items-center px-4 bg-white">
    <div className="col-5 px-0">
      <Search /> 
    </div> 
    <div className="d-flex col-7 pr-5 justify-content-end align-items-center">
      <div className="notifications mr-3 cursor-pointer">
        <span className="notification-badge badge-danger"></span>
        <NotificationIcon className="icon-sm"/>
      </div>
      <SettingsIcon className="icon-sm mr-4 cursor-pointer" />
      <UserProfile />
    </div>
  </div>
};

export default Header;

