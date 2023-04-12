import { DRAWER_ROUTES } from '../navigations/Constants';
import BottomTabNavigation from '../navigations/BottomTabNavigation';
import ProfileScreen from '../screens/profile/ProfileScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';
import CustomIcon from '../components/customComponents/CustomIcon';
import SettingsNavigation from '../navigations/SettingsNavigation';


export default drawerRoutes = [
    {
        name: DRAWER_ROUTES.BOTTOM_TAB_ROUTES,
        component: BottomTabNavigation,
        options : {
            headerShown: false,
            drawerLabel : "Home",
            drawerIcon : ({}) =><CustomIcon  iconName="home" />,
        }
    },
    {
        name: DRAWER_ROUTES.PROFILE,
        component: ProfileScreen,
         options : {
            drawerLabel : "Profile",
            drawerIcon : ({}) =><CustomIcon  iconName="person" />,
            headerShown: false,
        }
    },
    {
        name: DRAWER_ROUTES.SETTINGS,
        component: SettingsNavigation,
        options : {
            drawerLabel : "Settings",
            drawerIcon : ({}) =><CustomIcon  iconName="settings" />,
        }
    },
]