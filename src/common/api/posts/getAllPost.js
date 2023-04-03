import { apiConfig } from "../apiConfig";

import {
  getAllPostsRequest,
  getAllPostsSuccess,
  getAllPostsFailure,
} from "../../../redux/slices/PostsSlice";
import { store } from "../../../redux/store";
import apiCall from "../apiCall";
import getHeaders from "../getHeaders";

export const getAllPost = async () => {
  store.dispatch(getAllPostsRequest());

  const { endPoint , method} = apiConfig.POSTS.GET_ALL_POSTS;


  const headers = await getHeaders(true);


  try {
    const response = await apiCall(method, endPoint, headers);
    store.dispatch(getAllPostsSuccess(response.data));
  } catch (err) {
    store.dispatch(getAllPostsFailure());
    console.log(err);
  }
};
