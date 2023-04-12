import CustomIcon from "../../components/customComponents/CustomIcon";
import { BOTTOM_TAB_ROUTES, HOME_ROUTES } from "../Constants";

export const getBottomTabBarScreenOptions = (themeColor,route) => {
    return {
        headerShown: true,
        tabBarShowLabel: false,
        tabBarStyle: {
            backgroundColor: themeColor?.background,
            borderTopWidth: 0,
        },
        tabBarActiveTintColor: themeColor?.primary,
        tabBarInactiveTintColor: themeColor?.text,
        tabBarIcon: ({focused}) => {
            let iconName;
            let colorFocused = focused ? themeColor?.tabBarIconColor : themeColor?.text;
            if (route.name === BOTTOM_TAB_ROUTES.HOME) {
                iconName = 'home'
            } else if (route.name === BOTTOM_TAB_ROUTES.SEARCH) {
                iconName = 'search'
            } else if (route.name === BOTTOM_TAB_ROUTES.NOTIFICATION) {
                iconName = 'notifications'
            } else if (route.name === BOTTOM_TAB_ROUTES.MESSAGES) {
                iconName = 'mail'
            }
            return <CustomIcon iconName={iconName} color={colorFocused} />;
        },
    }
  };

  

  
  
  