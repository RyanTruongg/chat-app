import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import conversationsAPI from "../api/conversationsAPI";

export const fetchAllConversations = createAsyncThunk(
  "conversations/fetchAllConversations",
  async (userID, thunkAPI) => {
    const res = await conversationsAPI.fetchAllConversationsOfUser(userID);
    return res;
  },
  {
    condition: (userID, { getState }) => {
      const { conversations } = getState();
      if (
        conversations.status === "pending" ||
        conversations.status === "fulfilled"
      )
        return false;
    },
  }
);

export const markAsRead = createAsyncThunk(
  "conversations/markAsRead",
  async ({ uid, conversationID }, thunkAPI) => {
    const res = await conversationsAPI.markAsRead(uid, conversationID);
    return { res, conversationID };
  }
);

export const conversationsSlice = createSlice({
  name: "conversations",
  initialState: { data: [], status: "idle" },
  reducers: {
    addConversations: (state, action) => {
      state.data.push(action.payload);
    },
    updateLastMsg: (state, action) => {
      const { conversationIndex, lastMsg } = action.payload;
      state.data[conversationIndex].lastMsg = lastMsg;
      state.data[conversationIndex].seen = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllConversations.pending, (state, action) => {
      if (state.status === "idle") state.status = "pending";
    });
    builder.addCase(fetchAllConversations.fulfilled, (state, action) => {
      if (state.status === "pending") state.status = "fulfilled";
      state.data = action.payload;
    });
    builder.addCase(markAsRead.fulfilled, (state, action) => {
      const newConversation = state.data.find(
        (e) => e.info._id === action.payload.conversationID
      );
      newConversation.seen = true;
    });
  },
});

export const { addConversations, updateLastMsg } = conversationsSlice.actions;
export default conversationsSlice.reducer;
