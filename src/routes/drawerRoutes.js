import { DRAWER_ROUTES } from '../navigations/Constants';
import BottomTabNavigation from '../navigations/BottomTabNavigation';
import ProfileScreen from '../screens/profile/ProfileScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';
import CustomIcon from '../components/customComponents/CustomIcon';


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
        component: SettingsScreen,
        options : {
            drawerLabel : "Settings",
            drawerIcon : ({}) =><CustomIcon  iconName="settings" />
        }
    },
    {
        name: DRAWER_ROUTES.LOGOUT,
        component: SettingsScreen,
        options : {
            drawerLabel : "Logout",
            drawerIcon : ({}) =><CustomIcon  iconName="logout" />
        }
    },

];