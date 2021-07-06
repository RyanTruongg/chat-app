import { useState, useEffect } from 'react';
import { useContactList } from '../../hook/use-contact-list';

import socket from '../../service/websocket';


import Button from '../common/Button';

const ChatboxMsgInput = ({ roomID, uid, pushNewMsg }) => {
  const [msg, setMsg] = useState("");

  const { updateContactLastMsg } = useContactList()

  useEffect(() => {
    socket.on("msg:create", ({ success, doc }) => {
      if (success) {
        pushNewMsg(doc);
        updateContactLastMsg(doc.to, doc);
      }
    })

    return () => {
      socket.off("msg:create")
    }
  }, [pushNewMsg, updateContactLastMsg])

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
          color="var(--primary)"
        />
      </form>
    </div>
  );
}

export default ChatboxMsgInput;
