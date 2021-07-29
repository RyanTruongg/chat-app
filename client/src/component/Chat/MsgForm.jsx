import { useState } from 'react';
import { useContactList } from '../../hook/use-contact-list';

import socket from '../../service/websocket';


import Button from '../common/Button';

const MsgForm = ({ roomID, uid, pushNewMsg }) => {
  const [msg, setMsg] = useState("");

  const { updateContact } = useContactList();

  const sendMsg = (e) => {
    e.preventDefault();
    if (msg.trim()) {
      const payload = {
        from: uid,
        to: roomID,
        content: msg,
      }
      socket.emit("msg:create", payload, ({ doc, contact }) => {
        pushNewMsg(doc);
        updateContact(contact);
      });
    }
    setMsg("");
  }

  return (
    <div className="msg-form">
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

export default MsgForm;
