import axios from "axios";
import baseUrl from "./baseUrl";

export const apiCall = async (method, requestBody, endpoint, headers) => {
  const config = {
    url: baseUrl + endpoint,
    method,
    headers,
    data: requestBody,
  };

 
    const response = await axios(config);
    return response;
};
