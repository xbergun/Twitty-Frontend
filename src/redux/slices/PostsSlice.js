import { createSlice } from "@reduxjs/toolkit";
import { API_STATUS } from "../../common/enums/apiEnums";

const initialState = {
  allPostsData: [],
  postsByUser : [],

  getAllPostApiStatus: API_STATUS.NONE,
  postCreatePostApiStatus : API_STATUS.NONE,
  getPostsByUserApiStatus : API_STATUS.NONE,
};

const AuthSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {

    clearApiStatus: (state) => {
      state.getAllPostApiStatus = API_STATUS.NONE;
      state.postCreatePostApiStatus = API_STATUS.NONE;
    }, 

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


    getPostsByUserRequest: (state) => {
      state.getPostsByUserApiStatus = API_STATUS.REQUEST;
    },
    getPostsByUserSuccess: (state, action) => {
      state.getPostsByUserApiStatus = API_STATUS.SUCCESS;
      state.postsByUser = action.payload;
    },
    getPostsByUserFailure: (state) => {
      state.getPostsByUserApiStatus = API_STATUS.FAILURE;
      state.postsByUser = [];
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

    clearApiStatus,

    getPostsByUserRequest,
    getPostsByUserSuccess,
    getPostsByUserFailure,
} = AuthSlice.actions;

export default AuthSlice.reducer;
