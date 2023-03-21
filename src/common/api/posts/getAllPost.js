import { getToken } from "../../../helpers/auth/token";
import { apiConfig } from "../apiConfig";
import api from "../api";

import {
  getAllPostsRequest,
  getAllPostsSuccess,
  getAllPostsFailure,
} from "../../../redux/slices/PostsSlice";
import { store } from "../../../redux/store";

export const getAllPost = async () => {
  store.dispatch(getAllPostsRequest());

  const { endPoint } = apiConfig.POSTS.GET_ALL_POSTS;

  const token = await getToken();

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer: ${token}`,
  };

  try {
    const response = await api.get(endPoint, { headers });
    store.dispatch(getAllPostsSuccess(response.data));
  } catch (err) {
    store.dispatch(getAllPostsFailure());
  }
};
