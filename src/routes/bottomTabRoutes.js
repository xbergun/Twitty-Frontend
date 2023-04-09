import { BOTTOM_TAB_ROUTES } from "../navigations/Constants";
import SearchScreen from "../screens/search/SearchScreen";
import CustomIcon from "../components/customComponents/CustomIcon";
import NotificationScreen from "../screens/notifications/NotificationScreen";
import MessagesScreen from "../screens/messages/MessagesScreen";
import AppStackNavigation from '../navigations/HomeNavigation';
import HomeNavigation from "../navigations/HomeNavigation";
import { getThemeColor } from "../utils/theme/themeUtils";

export default bottomTabBarRoutes = [
  {
    name: BOTTOM_TAB_ROUTES.HOME,
    component: HomeNavigation,
    options: {
      headerShown: false,
    },
  },
  {
    name: BOTTOM_TAB_ROUTES.SEARCH,
    component: SearchScreen,
    options: {
      headerTitle: "Search",
     
    },
  },
  {
    name: BOTTOM_TAB_ROUTES.NOTIFICATION,
    component: NotificationScreen,
    options: {
      headerTitle: "Notification",
     
    },
  },
  {
    name: BOTTOM_TAB_ROUTES.MESSAGES,
    component: MessagesScreen,
    options: {
      headerTitle: "Messages",
      
    },
  },
];
