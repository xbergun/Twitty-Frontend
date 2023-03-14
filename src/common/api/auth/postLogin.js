import { apiCall } from "../apiCall";
import { apiConfig } from "../apiConfig";
import { store } from "../../../redux/store";
import {
  getLoginRequest,
  getLoginSuccess,
  getLoginFailure,
} from "../../../redux/slices/AuthSlice";

const postLogin = async (requestBody) => {
  store.dispatch(getLoginRequest());

  const { endPoint, method, headers } = apiConfig.LOGIN;

  const response = await apiCall(method, requestBody, endPoint, headers);
  if (response.status === 200) {
    store.dispatch(getLoginSuccess(response.data));
  } else {
    store.dispatch(getLoginFailure(""));
  }
};

export default postLogin;
