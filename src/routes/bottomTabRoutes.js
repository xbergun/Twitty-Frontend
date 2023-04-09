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
    name: BOTTOM_TAB_ROUTES.STACK_ROUTES,
    component: HomeNavigation,
    options: {
      headerShown: false,
      tabBarIcon: ({ focused, color, size }) => {
        const theme = getThemeColor();
        return focused ? (
          <CustomIcon iconName="home" color={theme.tabBarIconColor} />
        ) : (
          <CustomIcon iconName="home" color={theme.tabBarIconColor} />
        );
      },
    },
  },
  {
    name: BOTTOM_TAB_ROUTES.SEARCH,
    component: SearchScreen,
    options: {
      headerTitle: "Search",
      tabBarIcon: ({ focused }) => {
        return focused ? (
          <CustomIcon iconName="search" color="blue.500" />
        ) : (
          <CustomIcon iconName="search" color="coolGray.800" />
        );
      },
    },
  },
  {
    name: BOTTOM_TAB_ROUTES.NOTIFICATION,
    component: NotificationScreen,
    options: {
      headerTitle: "Notification",
      tabBarIcon: ({ focused }) => {
        return focused ? (
          <CustomIcon iconName="notifications" color="blue.500" />
        ) : (
          <CustomIcon iconName="notifications" color="coolGray.800" />
        );
      },
    },
  },
  {
    name: BOTTOM_TAB_ROUTES.MESSAGES,
    component: MessagesScreen,
    options: {
      headerTitle: "Messages",
      tabBarIcon: ({ focused }) => {
        return focused ? (
          <CustomIcon iconName="mail" color="blue.500" />
        ) : (
          <CustomIcon iconName="mail" color="coolGray.800" />
        );
      },
    },
  },
];
