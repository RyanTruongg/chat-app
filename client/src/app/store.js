import { configureStore } from "@reduxjs/toolkit";
import conversationsReducer from "./conversationsSlice";
import messagesReducer from "./messagesSlice";

export const store = configureStore({
  reducer: { conversations: conversationsReducer, messages: messagesReducer },
});
