import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "./use-auth";

import { fetchMessages, addMessage } from "../app/messagesSlice";

import groupMsgList from "../helpers/groupMsgList";

export const useMessages = (conversationID) => {
  const auth = useAuth();
  const messages = useSelector(
    (state) => state.messages.data[conversationID]?.messages
  );
  const status = useSelector(
    (state) => state.messages.data[conversationID]?.status
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if ((!status || status !== "fulfilled") && conversationID) {
      dispatch(fetchMessages({ uid: auth.user?.uid, conversationID }));
    }
  }, [auth.user?.uid, conversationID, dispatch, status]);

  const groupMessages = () => {
    if (messages) {
      const sorted = [...messages].sort((a, b) => a.timestamp - b.timestamp);
      return groupMsgList(sorted);
    }

    return [];
  };

  const pushNewMessage = (conversationID, message) => {
    dispatch(addMessage({ conversationID: conversationID, message: message }));
  };

  return {
    groupMessages,
    pushNewMessage,
  };
};
