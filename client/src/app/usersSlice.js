import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import userAPI from "../api/userAPI";

export const fetchUserById = createAsyncThunk(
  "users/fetchUserById",
  async (userId, thunkAPI) => {
    const response = await userAPI.fetchUserById(userId);
    return response;
  },
  {
    condition: (userId, { getState }) => {
      const requests = getState().users.requests;
      const fetchStatus = requests[userId];
      if (fetchStatus === "fulfilled" || fetchStatus === "pending") {
        // Already fetched or in progress, don't need to re-fetch
        return false;
      }
    },
  }
);

export const usersAdapter = createEntityAdapter({
  selectId: (user) => user.uid,
});

export const usersSlice = createSlice({
  name: "users",
  initialState: usersAdapter.getInitialState({ status: "idle", requests: {} }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.pending, (state, action) => {
      state.requests[action.meta.arg] = "pending";
    });
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      usersAdapter.addOne(state, action.payload);
      state.requests[action.meta.arg] = "fulfilled";
    });
  },
});

export const usersSelector = usersAdapter.getSelectors((state) => state.users);

export default usersSlice.reducer;
