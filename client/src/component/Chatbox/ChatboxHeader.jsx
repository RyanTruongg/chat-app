import React from 'react';

import Avatar from '../common/Avatar';
import Button from '../common/Button';

const ChatboxHeader = ({ photoURL, displayName }) => {
  return (
    <div className="chatbox__header">
      <div className="left">
        <Avatar imgSrc={photoURL} size="medium" />
        <div className="chatbox-info">
          <p className="chatbox-info__name">{displayName}</p>
          <p className="chatbox-info__status">{"Active now"}</p>
        </div>
      </div>
      <div className="right">
        <Button variant="clear" iconName="phone_in_talk" color="var(--primary)" />
        <Button variant="clear" iconName="video_call" color="var(--primary)" />
        <Button variant="clear" iconName="more_horiz" color="var(--primary)" />
      </div>
    </div>
  );
}

export default ChatboxHeader;
