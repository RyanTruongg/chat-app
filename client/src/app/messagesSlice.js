import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import messagesAPI from "../api/messagesAPI";

export const fetchMessages = createAsyncThunk(
  "messages/fetchMessages",
  async ({ uid, conversationID }, thunkAPI) => {
    const res = await messagesAPI.fetchMessages(uid, conversationID);
    return { messages: res, conversationID: conversationID };
  }
);

export const messagesSlice = createSlice({
  name: "messages",
  initialState: { data: {} },
  reducers: {
    addMessage: (state, action) => {
      const { conversationID, message } = action.payload;
      if (state.data[conversationID])
        state.data[conversationID].messages.push(message);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMessages.fulfilled, (state, action) => {
      state.data[action.payload.conversationID] = {
        status: "fulfilled",
        messages: action.payload.messages,
      };
    });
  },
});

export const { addMessage } = messagesSlice.actions;
export default messagesSlice.reducer;
