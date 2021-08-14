import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllConversations,
  addConversations,
  updateLastMsg,
  markAsRead,
} from "../app/conversationsSlice";
import { useAuth } from "./use-auth";

export default function useConversationList() {
  const unsortedData = useSelector((state) => state.conversations.data);
  const data = [...unsortedData];
  data.sort((a, b) => b.lastMsg.timestamp - a.lastMsg.timestamp);

  const status = useSelector((state) => state.conversations.status);
  const dispatch = useDispatch();
  const auth = useAuth();

  const updateConversation = (conversation) => {
    const conversationIndex = unsortedData.findIndex(
      (e) => e.info._id === conversation.info._id
    );
    if (conversationIndex === -1) {
      dispatch(addConversations(conversation));
    } else {
      dispatch(
        updateLastMsg({ conversationIndex, lastMsg: conversation.lastMsg })
      );
    }
  };

  const getConversationInfo = (conversationID) => {
    const conversation = unsortedData.find(
      (e) => e.info._id === conversationID
    );
    if (conversation) return conversation.info;
  };

  const markConversationAsRead = (conversationID) => {
    const seen = unsortedData.find((e) => e.info._id === conversationID)?.seen;
    if (!seen) dispatch(markAsRead({ uid: auth.user?.uid, conversationID }));
  };

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchAllConversations(auth.user?.uid));
    }
  }, [auth.user?.uid, dispatch, status]);

  return {
    data,
    updateConversation,
    markConversationAsRead,
    getConversationInfo,
  };
}
