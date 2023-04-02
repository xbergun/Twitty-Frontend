
import { getToken } from '../../../helpers/auth/token';
import { postCreatePostFailure, postCreatePostRequest, postCreatePostSuccess } from '../../../redux/slices/PostsSlice';
import { store } from '../../../redux/store';
import { apiConfig } from '../apiConfig';
import CustomToast from '../../../components/toast/CustomToast';
import apiCall from '../apiCall';


export default postCreatePost = async (description) => {
    store.dispatch(postCreatePostRequest())

    const userData = store.getState().auth.userData.user;

    const { endPoint ,method} = apiConfig.POSTS.CREATE_POST;

    const token = await getToken();


    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer: ${token}`,
    };

   

    console.log(body)

    const response = await apiCall(method, endPoint, headers, body);


    if (response.status === 200) {
        store.dispatch(postCreatePostSuccess(response.data));
        CustomToast();
    }
    else {
        store.dispatch(postCreatePostFailure());
        CustomToast('Something went wrong', 'error');
    }
    

};