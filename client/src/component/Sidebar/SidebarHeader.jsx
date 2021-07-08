import React, { useState } from 'react';

import SearchIcon from '../../assets/icon/search.svg';
import Avatar from '../common/Avatar';
import Button from '../common/Button';

import { useAuth } from '../../hook/use-auth';

const SidebarHeader = ({ providerData, setOpen, open }) => {
  const [fullscreen, setFullscreen] = useState(false);
  const auth = useAuth();
  const { photoURL } = providerData || {};

  function toggleFullscreen() {
    const root = document.getElementById("root");
    if (!document.fullscreenElement) {
      root.requestFullscreen()
        .then(() => setFullscreen(true))
        .catch(err => {
          alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        });

    } else {
      setFullscreen(false);
      document.exitFullscreen();
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
          <Button iconName={fullscreen ? "fullscreen_exit" : "fullscreen"} onClick={toggleFullscreen} />
          <Button iconName="logout" title="Signout" onClick={auth.signout} />
          {
            open && <Button iconName="arrow_back" color="var(--primary)" onClick={() => setOpen(false)} />
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
