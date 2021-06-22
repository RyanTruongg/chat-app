import React from 'react';

import ChatboxCard from './ChatboxCard';

const ChatboxList = ({ listData }) => {
  return (
    <div className="chatbox-list">
      {listData && listData.map(item => <ChatboxCard />)}
      <ChatboxCard />
      <ChatboxCard />
      <ChatboxCard />
      <ChatboxCard />
      <ChatboxCard />
      <ChatboxCard />
      <ChatboxCard />
      <ChatboxCard />
      <ChatboxCard />
      <ChatboxCard />
      <ChatboxCard />
      <ChatboxCard />
    </div>
  );
}

export default ChatboxList;
