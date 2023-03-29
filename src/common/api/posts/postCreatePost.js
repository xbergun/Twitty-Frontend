
import { getToken } from '../../../helpers/auth/token';
import { postCreatePostFailure, postCreatePostRequest, postCreatePostSuccess } from '../../../redux/slices/PostsSlice';
import { store } from '../../../redux/store';
import api from '../api';
import { apiConfig } from '../apiConfig';
import Toast  from 'react-native-toast-message';
import CustomToast from '../../../components/toast/CustomToast';


export default postCreatePost = async (description) => {
    store.dispatch(postCreatePostRequest())

    const userData = store.getState().auth.userData.user;

    const { endPoint ,method} = apiConfig.POSTS.CREATE_POST;

    const token = await getToken();


    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer: ${token}`,
    };


    const body = {
        description,
        userId: userData._id,
    };


    const response = await api.post(endPoint, body, { headers });

    if (response.status === 200) {
        store.dispatch(postCreatePostSuccess());
    } else {
        store.dispatch(postCreatePostFailure());
    }

};