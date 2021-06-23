import React from 'react';

import Avatar from '../../common/Avatar';
import('./style.css')

const ChatboxMsgContainer = ({ msgText }) => {
  msgText = msgText ? msgText : ["Alaba trapasdasdfasfasdfasdfasdfasdfasdfDFSADFASDFASDFSDFSDFSDFDSFSDFSDFSDFSDFSDFSDFSDFSDFSDFSDFSFSDFSDAFSDFASDFASDFASDFASDFASDFSADFASDFASDFASDFASDFASDFASDFASDFASDFASDF", "lorem", "ahaha"]

  return (
    <div className="chatbox-msg-container">
      <div className="msg">
        <Avatar size="small" />
        <div className="msg-list">
          {msgText && msgText.map(msg => <p>{msg}</p>)}
        </div>
      </div>

      <div className="msg msg--mine">
        <Avatar size="small" />
        <div className="msg-list">
          {msgText && msgText.map(msg => <p>{msg}</p>)}
        </div>
      </div>
    </div>
  );
}

export default ChatboxMsgContainer;
