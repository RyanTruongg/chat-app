import React, { useState } from 'react';

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
        <SearchInput />
      </div>
    </header>
  );
}

function SearchInput() {
  const [input, setInput] = useState('')

  return (
    <>
      <input
        type="text"
        placeholder="Search messenger"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {!input && <img src={SearchIcon} alt="" />}
    </>
  )
}


export default SidebarHeader;
