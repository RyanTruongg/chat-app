import React, { useState } from 'react';

import SearchIcon from '../../assets/icon/search.svg';
import Avatar from '../common/Avatar';
import Button from '../common/Button';

import { useAuth } from '../../hook/use-auth';

const SidebarHeader = ({ providerData, setOpen, open }) => {
  const auth = useAuth();
  const { photoURL } = providerData || {};

  function reqFullScr() {
    const root = document.getElementById("root");
    if (root) {
      root.requestFullscreen()
    }
  }

  return (
    <header className="sidebar-header">
      <div className="sidebar-top">
        <div className="sidebar-top-left">
          <Avatar imgSrc={photoURL} />
          <span>Chats</span>
        </div>

        <div className="sidebar-top-right">
          <Button iconName="more_horiz" title="More" />
          <Button iconName="fullscreen" onClick={reqFullScr} />
          <Button iconName="logout" title="Signout" onClick={auth.signout} />
          {
            open && <Button iconName="arrow_back" color="var(--pink200)" onClick={() => setOpen(false)} />
          }
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
