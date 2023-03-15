import { AUTH_ROUTES, DRAWER_ROUTES } from '../navigations/Constants';
import FirstPage from '../pages/auth/IntroPage';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import BottomTabNavigation from '../navigations/BottomTabNavigation';
import ProfileScreen from '../pages/profile/profileScreen';

export default drawerRoutes = [
    {
        name: DRAWER_ROUTES.BOTTOM_TAB_ROUTES,
        component: BottomTabNavigation,
        options : {
            drawerLabel : "Home"
        }
    },
    {
        name: DRAWER_ROUTES.PROFILE,
        component: ProfileScreen,
    }

];