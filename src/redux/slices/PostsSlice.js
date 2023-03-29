import { createSlice } from "@reduxjs/toolkit";
import { API_STATUS } from "../../common/enums/apiEnums";

const initialState = {
  allPostsData: [],

  getAllPostApiStatus: API_STATUS.NONE,
  postCreatePostApiStatus : API_STATUS.NONE,
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

    postCreatePostRequest: (state) => {
      state.postCreatePostApiStatus = API_STATUS.REQUEST;
    },
    postCreatePostSuccess: (state, action) => {
      state.postCreatePostApiStatus = API_STATUS.SUCCESS;
    },
    postCreatePostFailure: (state) => {
      state.postCreatePostApiStatus = API_STATUS.FAILURE;
    },

  },
});

export const {
    getAllPostsRequest,
    getAllPostsSuccess,
    getAllPostsFailure,

    postCreatePostRequest,
    postCreatePostSuccess,
    postCreatePostFailure,
} = AuthSlice.actions;

export default AuthSlice.reducer;
