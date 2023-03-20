import { AUTH_ROUTES } from '../navigations/Constants';
import FirstPage from '../screens/auth/IntroPage';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';

export default authRoutes = [
    {
        name: AUTH_ROUTES.INTRO_PAGE,
        component: FirstPage,
        options: {
            headerTitle: ""
        }
    },
    {
        name: AUTH_ROUTES.LOGIN,
        component: Login,
        options : {
            headerTitle: "Get Login"
        }
    },
    {
        name: AUTH_ROUTES.REGISTER,
        component: Register,
    }
];