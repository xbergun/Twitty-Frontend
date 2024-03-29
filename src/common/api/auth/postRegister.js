import apiCall from "../apiCall";
import { apiConfig } from "../apiConfig";
import { store } from "../../../redux/store";
import {
  getRegisterFailure,
  getRegisterRequest,
  getRegisterSuccess,
} from "../../../redux/slices/AuthSlice";
import api from "../api";
import CustomToast from '../../../components/toast/CustomToast';
import { useNavigation } from "@react-navigation/native";
import getHeaders from "../getHeaders";

const postRegister = async (requestBody) => {
  store.dispatch(getRegisterRequest());

  const { endPoint, method } = apiConfig.REGISTER;

 const headers = await getHeaders()

  try {
    const response = await apiCall(method, endPoint, headers, requestBody, null);
    store.dispatch(getRegisterSuccess(response.data));
    CustomToast()
  }
  catch (error) {
    store.dispatch(getRegisterFailure());
    CustomToast( "error", "Error", "Something went wrong")

  }
};

export default postRegister;
