import React from "react";

import Avatar from "../common/Avatar";
import Button from "../common/Button";
import SearchInput from "./SearchInput";

import { useAuth } from "../../hook/use-auth";
import useToggleFullscreen from "../../hook/use-toggle-fullscreen";

const SidebarHeader = ({ providerData, setOpen, open }) => {
  const [fullscreen, toggleFullscreen] = useToggleFullscreen(false);
  const auth = useAuth();
  const { photoURL } = providerData || {};

  return (
    <header className="sidebar-header">
      <div className="sidebar-top">
        <div className="sidebar-top-left">
          <Avatar imgSrc={photoURL} />
          <span>Chats</span>
        </div>

        <div className="sidebar-top-right">
          <Button iconName="more_horiz" title="More" />
          <Button
            iconName={fullscreen ? "fullscreen_exit" : "fullscreen"}
            onClick={toggleFullscreen}
          />
          <Button iconName="logout" title="Signout" onClick={auth.signout} />
          {open && (
            <Button
              iconName="close"
              color="var(--primary)"
              onClick={() => setOpen(false)}
            />
          )}
        </div>
      </div>

      <div className="sidebar-bottom">
        <SearchInput />
      </div>
    </header>
  );
};

export default SidebarHeader;
