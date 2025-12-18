import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUserProfileApi, updateUserProfileApi } from "../api/user.js";

export const getUserProfile = createAsyncThunk(
  "user/getUserProfile",
  async (token, { rejectWithValue }) => {
    try {
      const user = await getUserProfileApi(token);
      return user;
    } catch (error) {
      return rejectWithValue({ status: error.status, message: error.message });
    }
  }
);

export const updateUserProfile = createAsyncThunk(
  "user/updateUserProfile",
  async ({ token, userData }, { rejectWithValue }) => {
    try {
      const updatedUser = await updateUserProfileApi(token, userData);
      return updatedUser;
    } catch (error) {
      return rejectWithValue({ status: error.status, message: error.message });
    }
  }
);

const initialState = {
  currentUser: null,
  status: "idle",
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // getUserProfile
      .addCase(getUserProfile.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.currentUser = action.payload;
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.status = "failed";

        // if (action.payload?.status === 401) {
        //   return;
        // }

        if (action.payload?.status === 500) {
          state.error = "Something went wrong. Please try again later.";
        } else {
          state.error = action.payload?.message || action.error.message;
        }
      })
      // updateUserProfile
      .addCase(updateUserProfile.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.currentUser = action.payload;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.status = "failed";

        // if (action.payload?.status === 401) {
        //   return;
        // }

        if (action.payload?.status === 400) {
          state.error = "Invalid user name";
        } else if (action.payload?.status === 500) {
          state.error = "Something went wrong. Please try again later.";
        } else {
          state.error = action.payload?.message || action.error.message;
        }
      });
  },
});

export default userSlice.reducer;
