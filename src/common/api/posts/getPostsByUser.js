import { getToken } from "../../../helpers/auth/token";
import { apiConfig } from "../apiConfig";
import api from "../api";

const getPostsByUser = async (userId) => {
  let { endPoint } = apiConfig.POSTS.GET_POSTS_BY_USER;

  endPoint = `${endPoint}/${userId}`;

  const token = await getToken();

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer: ${token}`,
  };

  try {
    const response = await api.get(endPoint, { headers });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export default getPostsByUser;
