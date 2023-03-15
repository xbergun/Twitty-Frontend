import { DRAWER_ROUTES } from '../navigations/Constants';
import BottomTabNavigation from '../navigations/BottomTabNavigation';
import ProfileScreen from '../pages/profile/profileScreen';
import SettingsScreen from '../pages/settings/settingsScreen';
import CustomIcon from '../components/customComponents/CustomIcon';


export default drawerRoutes = [
    {
        name: DRAWER_ROUTES.BOTTOM_TAB_ROUTES,
        component: BottomTabNavigation,
        options : {
            drawerLabel : "Home",
            drawerIcon : ({}) =><CustomIcon  iconName="home" />,
        
        }
    },
    {
        name: DRAWER_ROUTES.PROFILE,
        component: ProfileScreen,
         options : {
            drawerLabel : "Profile",
            drawerIcon : ({}) =><CustomIcon  iconName="person" />
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

];