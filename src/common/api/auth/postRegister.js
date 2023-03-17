import { apiCall } from "../apiCall";
import { apiConfig } from "../apiConfig";
import { store } from "../../../redux/store";
import {
  getRegisterFailure,
  getRegisterRequest,
  getRegisterSuccess,
} from "../../../redux/slices/AuthSlice";
import api from "../api";

const postRegister = async (requestBody,navigation) => {
  store.dispatch(getRegisterRequest());

  try {
    const response = await api.post(apiConfig.REGISTER.endPoint, requestBody);
    if (response.status === 200) {
      store.dispatch(getRegisterSuccess());
      navigation.navigate("Login", { message: "Register Success" });
    }

  } catch (error) {
    store.dispatch(getRegisterFailure());
    alert(error);
  }
};

export default postRegister;
