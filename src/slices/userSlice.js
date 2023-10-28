import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {postLogIn} from "apis/userAPI"
import { alertError, alertSuccess } from "helpers/sweetAlert2";

// async actions
export const logIn = createAsyncThunk(
  "user/logIn",
  async (values, { getState }) => {
    try {
      const data = await postLogIn(values);
      if (data) alertSuccess("Logged In successfully!");
      sessionStorage.setItem("user", JSON.stringify(data.content));
      const { rememberMe } = getState().user;
      if (rememberMe) {
        localStorage.setItem("user", JSON.stringify(data.content));
      }
      return data.content;
    } catch (error) {
      alertError("Failed to login!");
      throw error;
    }
  }
);

// default state
const initialState = {
  user:
    JSON.parse(sessionStorage.getItem("user")) ||
    JSON.parse(localStorage.getItem("user")) ||
    null,
  isLoading: false,
  error: null,
  rememberMe: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      return { ...state, user: null };
    },
    setRememberMe: (state, action) => {
      state.rememberMe = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logIn.pending, (state) => {
      return { ...state, isLoading: true };
    });
    builder.addCase(logIn.fulfilled, (state, action) => {
      return { ...state, isLoading: false, user: action.payload };
    });
    builder.addCase(logIn.rejected, (state, action) => {
      return { ...state, isLoading: false, error: action.error.message };
    });
  },
});

export const { logOut, setRememberMe } = userSlice.actions;

export default userSlice.reducer;
