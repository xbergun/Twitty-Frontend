import { createSlice } from "@reduxjs/toolkit";
import { API_STATUS } from "../../common/enums/apiEnums";

const initialState = {
  allPostsData: [],

  getAllPostApiStatus: API_STATUS.NONE,
};

const AuthSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getAllPostsRequest: (state) => {
      state.getAllPostApiStatus = API_STATUS.REQUEST;
    },
    getAllPostsSuccess: (state, action) => {
      state.getAllPostApiStatus = API_STATUS.SUCCESS;
      state.allPostsData = action.payload;
    },
    getAllPostsFailure: (state) => {
      state.getAllPostApiStatus = API_STATUS.FAILURE;
      state.allPostsData = [];
    },
  },
});

export const {
    getAllPostsRequest,
    getAllPostsSuccess,
    getAllPostsFailure,
} = AuthSlice.actions;

export default AuthSlice.reducer;
