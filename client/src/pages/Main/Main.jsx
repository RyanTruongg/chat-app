import { BrowserRouter as Router, Switch } from "react-router-dom";

import { PrivateRoute } from "../../hook/use-auth";
import Sidebar from "../../component/Sidebar";
import Chat from "../../component/Chat";
import socket from "../../service/websocket";
import { useEffect } from "react";
import { useMessages } from "../../hook/use-messages";
import useConversationList from "../../hook/use-conversations-list";

const Main = () => {
  const { pushNewMessage } = useMessages();
  const { updateConversation } = useConversationList();

  useEffect(() => {
    socket.on("private msg", ({ doc, conversation }) => {
      pushNewMessage(conversation.info._id, doc);
      conversation.lastMsg = doc;
      updateConversation(conversation);
    });
    return () => {
      socket.off("private msg");
    };
  }, [pushNewMessage, updateConversation]);

  return (
    <Router>
      <Sidebar />
      <Switch>
        <PrivateRoute exact path="/home/t/:conversationID">
          <Chat />
        </PrivateRoute>
      </Switch>
    </Router>
  );
};

export default Main;
