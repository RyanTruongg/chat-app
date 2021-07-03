import SidebarHeader from './SidebarHeader';
import ChatboxList from './ChatboxList';
import Button from '../common/Button';

import { useAuth } from '../../hook/use-auth';
import { useContactList } from '../../hook/use-contact-list';

import('./sidebar.css')

const Sidebar = () => {
  const auth = useAuth();
  const contactList = useContactList();

  return (
    <div className="sidebar">
      <SidebarHeader providerData={auth.user?.providerData[0]} />
      <ChatboxList listData={contactList.data} />
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
