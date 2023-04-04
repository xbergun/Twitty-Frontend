import { createSlice } from "@reduxjs/toolkit";

import { API_STATUS } from "../../common/enums/apiEnums";
import { setToken } from "../../helpers/auth/token";

const initialState = {
  userData: null,
  
  registerUserStatus: API_STATUS.NONE,
  loginStatus: API_STATUS.NONE,
  logOutApiStatus : API_STATUS.NONE,
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
      setToken(action.payload.access_token);
    },
    getLoginFailure: (state) => {
      state.loginStatus = API_STATUS.FAILURE;
    },

    getLogoutRequest: (state) => {
      state.logOutApiStatus = API_STATUS.REQUEST;
    },
    getLogoutSuccess: (state) => {
      state.logOutApiStatus = API_STATUS.SUCCESS;
      state.userData = null;
    },
    getLogoutFailure: (state) => {
      state.logOutApiStatus = API_STATUS.FAILURE;
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
  getLogoutRequest,
  getLogoutSuccess,
  getLogoutFailure,
} = AuthSlice.actions;

export default AuthSlice.reducer;
