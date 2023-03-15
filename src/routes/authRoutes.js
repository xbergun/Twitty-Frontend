import { AUTH_ROUTES } from '../navigations/Constants';
import FirstPage from '../pages/auth/IntroPage';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';

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