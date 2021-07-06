import {
  Link,
  useLocation
} from 'react-router-dom';

import Avatar from '../common/Avatar';

import { useAuth } from '../../hook/use-auth';

const RoomTitleCard = (props) => {
  const location = useLocation();
  const auth = useAuth();

  const {
    displayName,
    photoURL,
    msg,
    to,
    setOpen
  } = props;

  return (
    <Link
      onClick={() => setOpen(false)}
      to={to}
      className={to === location.pathname ? "room-title__card active" : "room-title__card"}>
      <Avatar imgSrc={photoURL} size="large" />
      <div className="room-title__card-info">
        <span style={{ display: "block", fontWeight: "600" }}>{displayName}</span>
        <span>{auth.user?.uid === msg?.from ? "You: " + msg?.content : msg?.content}</span>
      </div>
    </Link>
  );
}

export default RoomTitleCard;
