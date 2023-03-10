import axios from "axios";
import baseUrl from "./baseUrl";

export const apiCall = async (endpoint, method, data) => {
  const config = {
    method,
    url: `${baseUrl}/${endpoint}`,
    data,
  };

  try {
    const response = await axios(config);
    return response;

  } catch (err) {
    return null
  }
}