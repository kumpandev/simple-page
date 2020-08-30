import React from 'react';
import Search from './search'
import UserProfile from '../userProfile'
import { NotificationIcon, SettingsIcon, MenuIcon } from '../icons'

const Header = props => {
  const { openMenu } = props;

  return <div className="d-flex header-block border-bottom align-items-center p-4 bg-white">
    <MenuIcon className="icon-md mr-4 cursor-pointer menu-icon" onClick={openMenu}/>
    <div className="d-flex align-items-center justify-contnt-between w-100">
      <div className="d-md-inline-block d-none col-4 px-0">
        <Search /> 
      </div> 
      <div className="d-flex col-12 col-md-7 justify-content-end align-items-center">
        <div className="notifications mr-3 cursor-pointer">
          <span className="notification-badge badge-danger"></span>
          <NotificationIcon className="icon-sm"/>
        </div>
        <SettingsIcon className="icon-sm mr-4 cursor-pointer" />
        <UserProfile />
      </div>
    </div>
  </div>
};

export default Header;

