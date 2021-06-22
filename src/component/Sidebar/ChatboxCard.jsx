import React from 'react';

import Avatar from '../common/Avatar';

const ChatboxCard = (props) => {
  const {
    username = "Thanh Nhut",
    lastMsg = "Lorem ipsum dolor,adfadf asdfasfafasfsafasfasdfs Tui laf"

  } = props;

  return (
    <div className="chatbox-card">
      <Avatar size="large" />
      <div className="chatbox-card__info">
        <span style={{ display: "block", fontWeight: "600" }}>{username}</span>
        <span>{lastMsg}</span>
      </div>
    </div>
  );
}

export default ChatboxCard;
