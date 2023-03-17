import axios from "axios";
import baseUrl from "./api";

export const apiCall = async () => {
  const headers = {
    "Content-Type": "application/json",
  };

  const config = {
    url: baseUrl + endpoint,
    method,
    headers,
    data: requestBody,
  };

 
    const response = await axios(config);
    return response;
};
