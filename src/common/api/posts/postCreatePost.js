
import { getToken } from '../../../helpers/auth/token';
import { postCreatePostFailure, postCreatePostRequest, postCreatePostSuccess } from '../../../redux/slices/PostsSlice';
import { store } from '../../../redux/store';
import api from '../api';
import { apiConfig } from '../apiConfig';


export default postCreatePost = async (description) => {
    store.dispatch(postCreatePostRequest())

    console.log(description)

    const userData = store.getState().auth.userData.user;

    const { endPoint } = apiConfig.POSTS.CREATE_POST;

    const token = await getToken();


    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer: ${token}`,
    };


    const body = {
        description,
        userId: userData._id,
    };


    try {
        await api.post(endPoint, body, { headers });
        store.dispatch(postCreatePostSuccess());
    } catch (err) {
        store.dispatch(postCreatePostFailure());
        console.log("err", err);
    }



};