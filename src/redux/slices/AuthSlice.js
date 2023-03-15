import { createSlice } from "@reduxjs/toolkit";

import { API_STATUS } from "../../common/enums/apiEnums";

const initialState = {
  registerUserStatus: API_STATUS.NONE,

  loginStatus: API_STATUS.NONE,
  userData: [],
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getRegisterRequest: (state) => {
      state.registerUserStatus = API_STATUS.REQUEST;
    },
    getRegisterSuccess: (state) => {
      state.registerUserStatus = API_STATUS.SUCCESS;
    },
    getRegisterFailure: (state) => {
      state.registerUserStatus = API_STATUS.FAILURE;
    },

    getLoginRequest: (state) => {
      state.loginStatus = API_STATUS.REQUEST;
    },
    getLoginSuccess: (state, action) => {
      state.loginStatus = API_STATUS.SUCCESS;
      state.userData = action.payload;
    },
    getLoginFailure: (state) => {
      state.loginStatus = API_STATUS.FAILURE;
    },
  },
});

export const {
  getRegisterRequest,
  getRegisterSuccess,
  getRegisterFailure,
  getLoginRequest,
  getLoginSuccess,
  getLoginFailure,
} = AuthSlice.actions;

export default AuthSlice.reducer;
