import { BOTTOM_TAB_ROUTES } from "../navigations/Constants";
import HomeScreen from '../pages/home/HomeScreen';
import SearchScreen from "../pages/home/searchScreen";
import CustomIcon from '../components/customComponents/CustomIcon';
import NotificationScreen from '../pages/notifications/NotificationScreen';
import MessagesScreen from '../pages/messages/MessagesScreen';

export default bottomTabBarRoutes = [
    {
        name: BOTTOM_TAB_ROUTES.HOME,
        component: HomeScreen,
        options : {
            headerTitle: "Home",
            tabBarIcon : ({}) =><CustomIcon  iconName="home" />,
            
        }
    },
    {
        name: BOTTOM_TAB_ROUTES.SEARCH,
        component: SearchScreen,
        options : {
            headerTitle: "Search",
            tabBarIcon : ({}) =><CustomIcon  iconName="search" />
        }
    },
    {
        name: BOTTOM_TAB_ROUTES.NOTIFICATION,
        component: NotificationScreen,
        options : {
            headerTitle: "Notification",
            tabBarIcon : ({}) =><CustomIcon  iconName="notifications" />

        }
    },
    {
        name: BOTTOM_TAB_ROUTES.MESSAGES,
        component: MessagesScreen,
        options : {
            headerTitle: "Messages",
            tabBarIcon : ({}) =><CustomIcon  iconName="mail" />
        }
    }
];