import React from 'react';

import Avatar from '../common/Avatar';
import Button from '../common/Button';

import CallIcon from '../../assets/icon/call.svg';
import CameraIcon from '../../assets/icon/camera.svg';
import DotIcon from '../../assets/icon/dot.svg';

const ChatboxHeader = () => {
  return (
    <div className="chatbox__header">
      <div className="left">
        <Avatar size="medium" />
        <div className="chatbox-info">
          <p className="chatbox-info__name">{"Thanh Nhut"}</p>
          <p className="chatbox-info__status">{"Active now"}</p>
        </div>
      </div>
      <div className="right">
        <Button variant="clear" icon={CallIcon} />
        <Button variant="clear" icon={CameraIcon} />
        <Button variant="clear" icon={DotIcon} />
      </div>
    </div>
  );
}

export default ChatboxHeader;
