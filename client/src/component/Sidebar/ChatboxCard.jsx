import {
  Link,
  useLocation
} from 'react-router-dom';

import Avatar from '../common/Avatar';

import { useAuth } from '../../hook/use-auth';

const ChatboxCard = (props) => {
  const location = useLocation();
  const auth = useAuth();

  const {
    displayName = "Thanh Nhut",
    photoURL,
    msg,
    to,
  } = props;

  return (
    <Link to={to} className={to === location.pathname ? "chatbox-card active" : "chatbox-card"}>
      <Avatar imgSrc={photoURL} size="large" />
      <div className="chatbox-card__info">
        <span style={{ display: "block", fontWeight: "600" }}>{displayName}</span>
        <span>{auth.user?.uid === msg?.from ? "You: " + msg?.content : msg?.content}</span>
      </div>
    </Link>
  );
}

export default ChatboxCard;
