import React from 'react';

import Button from '../common/Button';

const ChatboxMsgInput = () => {
  return (
    <div className="chatbox-msg-input">
      <form >
        <input type="text" />
        <Button
          variant="clear"
          size="large"
          iconName="send"
          color="var(--pink300)"
        />
      </form>
    </div>
  );
}

export default ChatboxMsgInput;
