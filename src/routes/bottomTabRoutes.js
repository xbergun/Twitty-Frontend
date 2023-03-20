import { BOTTOM_TAB_ROUTES } from "../navigations/Constants";
import HomeScreen from "../screens/home/HomeScreen";
import SearchScreen from "../screens/search/searchScreen";
import CustomIcon from "../components/customComponents/CustomIcon";
import NotificationScreen from "../screens/notifications/NotificationScreen";
import MessagesScreen from "../screens/messages/MessagesScreen";

export default bottomTabBarRoutes = [
  {
    name: BOTTOM_TAB_ROUTES.HOME,
    component: HomeScreen,
    options: {
      headerTitle: "Home",
      tabBarIcon: ({ focused, color, size }) => {
        return focused ? (
          <CustomIcon iconName="home" color="blue.500" />
        ) : (
          <CustomIcon iconName="home" color="coolGray.800" />
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
