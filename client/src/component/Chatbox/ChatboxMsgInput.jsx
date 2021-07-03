import { useState, useEffect } from 'react';

import socket from '../../service/websocket';


import Button from '../common/Button';

const ChatboxMsgInput = ({ roomID, uid, pushNewMsg }) => {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    socket.on("msg:create", ({ success, _doc }) => {
      if (success) {
        pushNewMsg(_doc);
      }
    })

    return () => {
      socket.off("msg:create")
    }
  }, [pushNewMsg])

  const sendMsg = (e) => {
    e.preventDefault();
    if (msg.trim()) {
      const payload = {
        from: uid,
        to: roomID,
        content: msg,
      }
      socket.emit("msg:create", payload);
    }
    setMsg("");
  }

  return (
    <div className="chatbox-msg-input">
      <form onSubmit={sendMsg}>
        <input
          type="text"
          placeholder="Aa"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
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
