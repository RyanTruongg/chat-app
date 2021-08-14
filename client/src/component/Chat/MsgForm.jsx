import { useState } from "react";
import useConversationList from "../../hook/use-conversations-list";

import socket from "../../service/websocket";

import Button from "../common/Button";

const MsgForm = ({ conversationID, uid, pushNewMessage }) => {
  const [msg, setMsg] = useState("");

  const { updateConversation } = useConversationList();

  const sendMsg = (e) => {
    e.preventDefault();
    if (msg.trim()) {
      const payload = {
        senderID: uid,
        receiverID: conversationID,
        content: msg.trim(),
      };
      socket.emit("msg:create", payload, ({ doc, conversation }) => {
        pushNewMessage(conversation.info._id, doc);
        updateConversation(conversation);
      });
    }
    setMsg("");
  };

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
};

export default MsgForm;
