import {
  Link
} from 'react-router-dom';

import Avatar from '../common/Avatar';

const ChatboxCard = (props) => {
  const {
    username = "Thanh Nhut",
    photoURL,
    lastMsg = "Lorem ipsum dolor,adfadf asdfasfafasfsafasfasdfs Tui laf",
    to
  } = props;

  return (
    <Link to={to} className="chatbox-card">
      <Avatar imgSrc={photoURL} size="large" />
      <div className="chatbox-card__info">
        <span style={{ display: "block", fontWeight: "600" }}>{username}</span>
        <span>{lastMsg}</span>
      </div>
    </Link>
  );
}

export default ChatboxCard;
