import { useState, useEffect } from "react";

import SidebarHeader from "./SidebarHeader";
import RoomTitleList from "./RoomTitleList";
import Button from "../common/Button";

import { useAuth } from "../../hook/use-auth";
import "./sidebar.css";
import useConversationList from "../../hook/use-conversations-list";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const auth = useAuth();
  const conversationList = useConversationList();

  useEffect(() => {
    const x = window.matchMedia("(max-width: 768px)");
    if (x.matches) setOpen(true);
  }, []);

  return (
    <div className="sidebar" style={{ transform: open && "translateX(0px)" }}>
      <SidebarHeader
        open={open}
        setOpen={setOpen}
        providerData={auth.user?.providerData[0]}
      />
      <RoomTitleList setOpen={setOpen} data={conversationList.data} />

      {!open && (
        <Button
          className="sidebar-open"
          type="button"
          variant="clear"
          size="large"
          iconName="menu"
          color="var(--primary)"
          onClick={() => setOpen(true)}
        />
      )}
    </div>
  );
};

export default Sidebar;
