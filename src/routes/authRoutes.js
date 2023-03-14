import { AUTH_ROUTES } from '../navigations/Constants';
import FirstPage from '../pages/introPage/IntroPage';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';

export default authRoutes = [
    {
        name: AUTH_ROUTES.INTRO_PAGE,
        component: FirstPage,
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