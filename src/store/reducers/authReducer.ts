import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import api from "@/api/api";

import { LoginProps } from "@/types/auth";

interface SuccessResponse {
  token: string;
  message: string;
}

interface ErrorMessage {
  message: string;
}

export const adminLogin = createAsyncThunk<
  SuccessResponse,
  LoginProps,
  { rejectValue: ErrorMessage }
>(
  "auth/admin_login",
  async (adminInfo: LoginProps, { rejectWithValue, fulfillWithValue }) => {
    console.log(adminInfo);
    try {
      const { data } = await api.post<SuccessResponse>(
        "/admin-login",
        adminInfo,
        {
          withCredentials: true,
        }
      );
      localStorage.setItem("accessToken", data.token);
      console.log(data);
      return fulfillWithValue(data);
    } catch (err) {
      const error = err as AxiosError<ErrorMessage>;
      console.log(error.response?.data);
      return rejectWithValue(
        error.response?.data || { message: "An unknown error occurred" }
      );
    }
  }
);

export const authReducer = createSlice({
  name: "auth",
  initialState: {
    successMessage: "",
    errorMessage: "",
    loader: false,
    userInfo: "",
  },
  reducers: {
    messageClear: (state) => {
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(adminLogin.pending, (state) => {
        state.loader = true;
      })
      .addCase(adminLogin.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.successMessage = payload?.message || "Login Successful";
      })
      .addCase(adminLogin.rejected, (state, { payload }) => {
        state.loader = false;
        state.errorMessage = payload?.message || "An unknown error occurred";
      });
  },
});

export const { messageClear } = authReducer.actions;
export default authReducer.reducer;
