import React from 'react';

import ChatboxHeader from './ChatboxHeader';
import ChatboxMsgContainer from './ChatboxMsgContainer';
import ChatboxMsgInput from './ChatboxMsgInput';

import('./chatbox.css');

const Chatbox = () => {
  return (
    <div className="chatbox">
      <ChatboxHeader />
      <ChatboxMsgContainer />
      <ChatboxMsgInput />
    </div>
  );
}

export default Chatbox;
