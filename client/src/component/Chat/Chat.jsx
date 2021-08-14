import { useParams } from "react-router-dom";

import { useAuth } from "../../hook/use-auth";

import ChatHeader from "./ChatHeader";
import ChatMsgContainer from "./MsgContainer";
import MsgForm from "./MsgForm";

import "./chat.css";
import useConversationList from "../../hook/use-conversations-list";
import { useMessages } from "../../hook/use-messages";

const Chat = () => {
  const { conversationID } = useParams();

  const { getConversationInfo } = useConversationList();
  const { groupMessages, pushNewMessage } = useMessages(conversationID);
  const auth = useAuth();

  const groupedMessages = groupMessages();
  const conversationInfo = getConversationInfo(conversationID);
  const uid = auth.user?.uid;

  if (groupedMessages) {
    return (
      <div className="chat">
        <ChatHeader
          displayName={conversationInfo?.displayName || ""}
          photoURL={conversationInfo?.photoURL || ""}
        />
        <ChatMsgContainer
          roomPhotoURL={conversationInfo?.photoURL || ""}
          uid={uid}
          msgList={groupedMessages}
        />
        <MsgForm
          pushNewMessage={pushNewMessage}
          conversationID={conversationID}
          uid={uid}
        />
      </div>
    );
  } else {
    return <p>Loading...</p>;
  }
};

export default Chat;
