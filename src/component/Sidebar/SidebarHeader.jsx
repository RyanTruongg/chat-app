import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import SearchIcon from '../../assets/icon/search.svg';
import Avatar from '../common/Avatar';
import Button from '../common/Button';

import { useAuth } from '../../hook/use-auth';

const SidebarHeader = () => {
  const history = useHistory();
  const auth = useAuth();

  return (
    <header className="sidebar-header">
      <div className="sidebar-top">
        <div className="sidebar-top-left">
          <Avatar />
          <span>Chats</span>
        </div>

        <div className="sidebar-top-right">
          <Button iconName="more_horiz" />
          <Button iconName="add" />
          <Button iconName="logout" onClick={() => auth.signout(() => history.push('/'))} />
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
