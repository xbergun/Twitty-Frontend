import { BOTTOM_TAB_ROUTES } from "../navigations/Constants";
import HomeScreen from '../pages/home/HomeScreen';
import SearchScreen from "../pages/home/searchScreen";

export default bottomTabBarRoutes = [
    {
        name: BOTTOM_TAB_ROUTES.HOME,
        component: HomeScreen,
        options : {
            headerTitle: "Home"
        }
    },
    {
        name: BOTTOM_TAB_ROUTES.SEARCH,
        component: SearchScreen,
        options : {
            headerTitle: "Home"
        }
    },
];