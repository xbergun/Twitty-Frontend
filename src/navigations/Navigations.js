
import IntroPage from '../pages/introPage/IntroPage';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Home from '../pages/home/Home';
import { NAVIGATION } from './Constants';

export default routes =[
    {
        name: NAVIGATION.INTRO_PAGE,
        component: IntroPage,
    },
    {
        name: NAVIGATION.LOGIN,
        component: Login,
    },
    {
        name: NAVIGATION.REGISTER,
        component: Register,
    },
    {
        name: NAVIGATION.HOME,
        component: Home,
    }
]