import { apiConfig } from "../apiConfig";
import { store } from "../../../redux/store";
import {
  getLoginRequest,
  getLoginSuccess,
  getLoginFailure,
} from "../../../redux/slices/AuthSlice";
import api from "../api";
import { setToken } from "../../../helpers/auth/token";

const postLogin = async (requestBody) => {
  store.dispatch(getLoginRequest());

  const { endPoint } = apiConfig.LOGIN;

  try {
    const response = await api.post(endPoint, requestBody);
    store.dispatch(getLoginSuccess(response.data));
  } catch (error) {
    console.log(error);
    store.dispatch(getLoginFailure());
  }
};

export default postLogin;
