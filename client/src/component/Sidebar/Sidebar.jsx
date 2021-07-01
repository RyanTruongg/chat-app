import { useState, useEffect } from 'react';

import SidebarHeader from './SidebarHeader';
import ChatboxList from './ChatboxList';
import Button from '../common/Button';

import socket from '../../service/websocket';
import { useAuth } from '../../hook/use-auth';

import('./sidebar.css')

const Sidebar = () => {
  const [listUser, setListUser] = useState([]);
  const auth = useAuth();

  useEffect(() => {
    if (auth.loginState === "loged") {
      socket.on("users", users => {
        console.log(users);
        console.log(auth.user?.uid)
        users = users.filter((user) => user?.userID !== auth.user?.uid);
        setListUser(users);
      });
    }

    return () => {
      socket.off("users");
    };
  }, [auth.loginState, auth.user?.uid]);

  return (
    <div className="sidebar">
      <SidebarHeader providerData={auth.user?.providerData[0]} />
      <ChatboxList listData={listUser} />
      <Button
        size="large"
        variant="clear"
        className="m-logout"
        iconName="logout"
        onClick={auth.signout} />
    </div>
  );
}

export default Sidebar;
