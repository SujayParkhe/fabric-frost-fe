import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "@/api/api";
import { LoginProps } from "@/types/auth";

export const adminLogin = createAsyncThunk(
  "auth/admin_login",
  async (adminInfo: LoginProps) => {
    console.log(adminInfo);
    try {
      const { data } = await api.post("/admin-login", adminInfo, {
        withCredentials: true,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
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
  reducers: {},
});

export default authReducer.reducer;
