import CreatePost from '../components/posts/CreatePost/CreatePost';
import { HOME_ROUTES, STACK_ROUTES } from '../navigations/Constants';
import HomeScreen from '../screens/home/HomeScreen';

export default homeRoutes = [
    {
        name: HOME_ROUTES.HOME,
        component: HomeScreen,
        options : {
            headerTitle: "Home",
            headerShown: true,
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