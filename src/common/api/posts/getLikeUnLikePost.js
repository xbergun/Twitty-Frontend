import apiCall from "../apiCall";
import { apiConfig } from "../apiConfig";
import getHeaders from "../getHeaders";


export const getLikeUnLikePost = async (postId) => {

    const { endPoint, method } = apiConfig.POSTS.LIKE_AND_UNLIKE_POST;

    const headers = getHeaders();

    
    try {
        const response = await apiCall(method, endPoint, headers, null, postId);
        
    } catch (err) {
        
    }

    
};
