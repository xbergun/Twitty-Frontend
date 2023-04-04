import apiCall from "../apiCall";
import { apiConfig } from "../apiConfig";
import getHeaders from "../getHeaders";


export const getLikeUnLikePost = async (postId) => {

    const { endPoint, method } = apiConfig.POSTS.LIKE_AND_UNLIKE_POST;

    const headers = await getHeaders(true);

    console.log(headers)

    const id = postId;
    
    try {
        const response = await apiCall(method, endPoint, headers, null, id);
        console.log(response)
        return response;
        
    } catch (err) {
        console.log(err);
    }

    
};
