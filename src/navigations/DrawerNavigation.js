import { createDrawerNavigator } from "@react-navigation/drawer";
import { useColorMode, useTheme } from "native-base";
import drawerRoutes from "../routes/drawerRoutes";
import CustomDrawerContent from "../components/card/CustomDrawerContent";
import { getDrawerScreenOptions } from "./screenOptions/DrawerScreenOptions";
import { getThemeColor } from "../utils/theme/themeUtils";

const Drawer = createDrawerNavigator();

export default DrawerNavigation = () => {
  
  const theme = getThemeColor();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={getDrawerScreenOptions(theme)}
    >
      {drawerRoutes.map((route, index) => {
        return (
          <Drawer.Screen
            key={index}
            name={route.name}
            component={route.component}
            options={route.options}
          />
        );
      })}
    </Drawer.Navigator>
  );
};
