import { getToken } from "../../../helpers/auth/token";
import { apiConfig } from "../apiConfig";
import api from "../api";
import getHeaders from "../getHeaders";
import apiCall from "../apiCall";
import { store } from "../../../redux/store";
import {
  getPostsByUserFailure,
  getPostsByUserRequest,
  getPostsByUserSuccess,
} from "../../../redux/slices/PostsSlice";

const getPostsByUser = async (userId) => {
  store.dispatch(getPostsByUserRequest());

  console.log("getPostsByUser: userId: ", userId);

  let { endPoint, method } = apiConfig.POSTS.GET_POSTS_BY_USER;

  const headers = await getHeaders(true);

  const id = userId;

  endPoint = endPoint + `/${id}`;

  const params = {
    id: userId,
  };

  try {
    const response = await apiCall(method, endPoint, headers, null, params);
    store.dispatch(getPostsByUserSuccess(response.data));
  } catch (err) {
    store.dispatch(getPostsByUserFailure());
    console.log(err);
  }
};

export default getPostsByUser;
