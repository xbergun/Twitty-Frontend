import { apiConfig } from "../apiConfig";
import { store } from "../../../redux/store";
import {
  getLoginRequest,
  getLoginSuccess,
  getLoginFailure,
} from "../../../redux/slices/AuthSlice";
import apiCall from "../apiCall";
import CustomToast from '../../../components/toast/CustomToast';


const postLogin = async (requestBody) => {
  store.dispatch(getLoginRequest());

  const { endPoint } = apiConfig.LOGIN;

  try {
    const response = await apiCall("post", endPoint, null, requestBody,null);
    store.dispatch(getLoginSuccess(response.data));
    CustomToast()
  } catch (error) {
    store.dispatch(getLoginFailure());
    CustomToast( "error", "Error", "Something went wrong")
  }
};

export default postLogin;
