import { getToken } from "../../../helpers/auth/token";
import { apiConfig } from "../apiConfig";
import api from "../api";

import {
  getAllPostsRequest,
  getAllPostsSuccess,
  getAllPostsFailure,
} from "../../../redux/slices/PostsSlice";
import { store } from "../../../redux/store";
import apiCall from "../apiCall";

export const getAllPost = async () => {
  store.dispatch(getAllPostsRequest());

  const { endPoint , method} = apiConfig.POSTS.GET_ALL_POSTS;

  const token = await getToken();

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer: ${token}`,
  };

  try {
    const response = await apiCall(method, endPoint, headers);
    store.dispatch(getAllPostsSuccess(response.data));
  } catch (err) {
    store.dispatch(getAllPostsFailure());
    console.log(err);
  }
};
