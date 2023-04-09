import CreatePost from '../components/posts/CreatePost/CreatePost';
import { HOME_ROUTES } from '../navigations/Constants';
import HomeScreen from '../screens/home/HomeScreen';

export default homeRoutes = [
    {
        name: HOME_ROUTES.HOME,
        component: HomeScreen,
        options : {
            headerShown: false,
        }
    },
    {
        name: HOME_ROUTES.CREATE_POST,
        component: CreatePost,
        options : {
            headerTitle: "Create Post",
            headerShown: true,

        }
    },


];