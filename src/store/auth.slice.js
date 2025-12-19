import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi, signupApi } from "../api/auth.js";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const token = await loginApi({ email, password });
      return token;
    } catch (error) {
      return rejectWithValue({ status: error.status, message: error.message });
    }
  }
);

export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (userData, { rejectWithValue }) => {
    try {
      const user = await signupApi(userData);
      return user;
    } catch (error) {
      return rejectWithValue({ status: error.status, message: error.message });
    }
  }
);

const initialState = {
  token: null,
  status: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    logout: (state) => {
      state.token = null;
      state.status = "idle";
      state.error = null;

      localStorage.removeItem("token");
      sessionStorage.removeItem("token");
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.token = action.payload;
        if (action.meta.arg.remember) {
          localStorage.setItem("token", action.payload);
        } else {
          sessionStorage.setItem("token", action.payload);
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        if (action.payload?.status === 400) {
          state.error = "Invalid email or password";
        } else if (action.payload?.status === 500) {
          state.error = "Something went wrong. Please try again later.";
        } else {
          state.error = action.payload?.message || action.error.message;
        }
      })
      // Signup
      .addCase(signupUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.status = "failed";
        if (action.payload?.status === 400) {
          state.error =
            "Invalid input. Please check your entries and try again.";
        } else if (action.payload?.status === 500) {
          state.error = "Something went wrong. Please try again later.";
        } else {
          state.error = action.payload?.message || action.error.message;
        }
      });
  },
});

export const { logout, setToken } = authSlice.actions;
export default authSlice.reducer;
