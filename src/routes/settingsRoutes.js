import { SETTINGS_ROUTES } from "../navigations/Constants";
import EditProfile from "../screens/settings/EditProfile";
import SettingsScreen from "../screens/settings/SettingsScreen";

export default settingsRoutes = [
    {
        name: SETTINGS_ROUTES.SETTINGS,
        component: SettingsScreen,
    },
    {
        name: SETTINGS_ROUTES.EDIT_PROFILE,
        component: EditProfile,
    }
];
