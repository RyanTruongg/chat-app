import { useEffect, useState } from 'react';
import {
  Link,
  useLocation
} from 'react-router-dom';

import Avatar from '../common/Avatar';
import { useAuth } from '../../hook/use-auth';

import calcTimePassed from '../../helpers/calcTimePassed';

const RoomTitleCard = ({ msg, ...props }) => {
  const [timePassed, setTimePassed] = useState(calcTimePassed(msg.timestamp));
  const location = useLocation();
  const auth = useAuth();

  const {
    displayName,
    photoURL,
    to,
    setOpen
  } = props;

  useEffect(() => {
    setTimePassed(calcTimePassed(msg.timestamp));
    const interval = setInterval(() => {
      setTimePassed(calcTimePassed(msg.timestamp))
    }, 60000);
    return () => clearInterval(interval);
  }, [msg.timestamp])

  return (
    <Link
      onClick={() => setOpen(false)}
      to={to}
      className={to === location.pathname ? "room-title__card active" : "room-title__card"}>
      <Avatar imgSrc={photoURL} size="large" />
      <div className="room-title__card-info">
        <p style={{ fontWeight: "600" }}>{displayName}</p>
        <div className="last-msg">
          <span>{auth.user?.uid === msg?.from ? "You: " + msg?.content : msg?.content}</span>
          <span>{timePassed}</span>
        </div>

      </div>
    </Link>
  );
}

export default RoomTitleCard;
