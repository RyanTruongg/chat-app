import React from 'react';

import SearchIcon from '../../assets/icon/search.svg';
import DotIcon from '../../assets/icon/dot.svg';
import PlusIcon from '../../assets/icon/plus.svg';
import LogoutIcon from '../../assets/icon/logout.svg';

import Avatar from '../common/Avatar';
import Button from '../common/Button';

const SidebarHeader = ({ size, rounded, shadow }) => {
  // const style = {

  // }

  return (
    <header className="sidebar-header">
      <div className="sidebar-top">
        <div className="sidebar-top-left">
          <Avatar />
          <span>Chats</span>
        </div>

        <div className="sidebar-top-right">
          <Button icon={DotIcon} />
          <Button icon={PlusIcon} />
          <Button icon={LogoutIcon} />
        </div>
      </div>

      <div className="sidebar-bottom">
        <input type="text" placeholder="Search messenger" />
        <img src={SearchIcon} alt="" />
      </div>
    </header>
  );
}


export default SidebarHeader;
