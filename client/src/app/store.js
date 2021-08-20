import { configureStore } from "@reduxjs/toolkit";
import conversationsReducer from "./conversationsSlice";
import messagesReducer from "./messagesSlice";
import userReducer from "./usersSlice";

export const store = configureStore({
  reducer: {
    conversations: conversationsReducer,
    messages: messagesReducer,
    users: userReducer,
  },
});
