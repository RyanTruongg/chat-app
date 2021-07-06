import { useState, useEffect } from 'react';

import SidebarHeader from './SidebarHeader';
import ChatboxList from './ChatboxList';
import Button from '../common/Button';

import { useAuth } from '../../hook/use-auth';
import { useContactList } from '../../hook/use-contact-list';
import './sidebar.css';


const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const auth = useAuth();
  const contactList = useContactList();

  useEffect(() => {
    const x = window.matchMedia("(max-width: 768px)");
    if (x.matches) setOpen(true);
  }, []);

  return (
    <div className="sidebar" style={{ transform: open && "translateX(0px)" }}>
      <SidebarHeader open={open} setOpen={setOpen} providerData={auth.user?.providerData[0]} />
      <ChatboxList setOpen={setOpen} listData={contactList.data} />

      {
        !open && (
          <Button
            className="sidebar-open"
            type="button"
            variant="clear"
            size="large"
            iconName="menu"
            color="var(--primary)"
            onClick={() => setOpen(true)}
          />
        )
      }

    </div>
  );
}

export default Sidebar;
