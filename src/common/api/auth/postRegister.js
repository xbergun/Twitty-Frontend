import { apiCall } from "../apiCall";
import { apiConfig } from "../apiConfig";
import { store } from "../../../redux/store";
import {
  getRegisterFailure,
  getRegisterRequest,
  getRegisterSuccess,
} from "../../../redux/slices/AuthSlice";

const postRegister = async (requestBody) => {
  store.dispatch(getRegisterRequest());

  const { endPoint, method, headers } = apiConfig.REGISTER;

  const response = await apiCall(method, requestBody, endPoint, headers);
  if (response.status === 200) {
    alert("kayıt başarılı, lütfen giriş yapınız");
    store.dispatch(getRegisterSuccess(response.data));
  } else {
    store.dispatch(getRegisterFailure(""));
  }
};

export default postRegister;
