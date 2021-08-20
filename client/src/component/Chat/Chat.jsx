import { useParams } from "react-router-dom";

import { useAuth } from "../../hook/use-auth";
import useUserInfo from "../../hook/use-user-info";

import ChatHeader from "./ChatHeader";
import ChatMsgContainer from "./MsgContainer";
import MsgForm from "./MsgForm";

import "./chat.css";
import { useMessages } from "../../hook/use-messages";

const Chat = () => {
  const { conversationID } = useParams();

  const { groupMessages, pushNewMessage } = useMessages(conversationID);
  const auth = useAuth();

  const groupedMessages = groupMessages();
  const userInfo = useUserInfo().getUserById(conversationID);
  const uid = auth.user?.uid;

  if (groupedMessages) {
    return (
      <div className="chat">
        <ChatHeader
          displayName={userInfo?.displayName || "Loading..."}
          photoURL={userInfo?.photoURL || "https://i.stack.imgur.com/ATB3o.gif"}
        />
        <ChatMsgContainer
          roomPhotoURL={
            userInfo?.photoURL || "https://i.stack.imgur.com/ATB3o.gif"
          }
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
