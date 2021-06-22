import React from 'react';

// import Avatar from '../common/Avatar';
import SidebarHeader from './SidebarHeader';
import ChatboxList from './ChatboxList';

import('./sidebar.css')

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* <Avatar /> */}
      <SidebarHeader />
      <ChatboxList />
    </div>
  );
}

export default Sidebar;
