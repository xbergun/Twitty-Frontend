import { useNavigation } from "@react-navigation/native";
import CustomToast from "../../../components/toast/CustomToast";
import {
  getLoginRequest,
  getLogoutFailure,
  getLogoutRequest,
  getLogoutSuccess,
} from "../../../redux/slices/AuthSlice";
import { store } from "../../../redux/store";
import apiCall from "../apiCall";
import { apiConfig } from "../apiConfig";
import getHeaders from "../getHeaders";

const getLogout = async () => {
  store.dispatch(getLogoutRequest());

  const navigation = useNavigation();
  const { endPoint, method } = apiConfig.LOGOUT;

  const headers = getHeaders();

  try {
    const response = await apiCall(method, endPoint, headers, null, null);
    console.log(response);
    CustomToast("success", "Logged out successfully");
    store.dispatch(getLogoutSuccess());
  } catch (err) {
    console.log(err);
    store.dispatch(getLogoutFailure());

    return CustomToast("error", "Something went wrong");
  }
};

export default getLogout;
