import { createDrawerNavigator } from "@react-navigation/drawer";
import { useColorMode, useTheme } from "native-base";
import drawerRoutes from "../routes/drawerRoutes";
import CustomDrawerContent from "../components/card/CustomDrawerContent";

const Drawer = createDrawerNavigator();

export default DrawerNavigation = () => {
  const { colorMode } = useColorMode();
  const theme = useTheme();
  const themeColor = theme.colors.mode[colorMode];

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={() => {
        return {
          headerShown: true,
          headerStyle: {
            backgroundColor: themeColor?.background,
          },
          headerTitleStyle: {
            color: themeColor?.text,
          },
          drawerLabelStyle: {
            color: themeColor?.text,
          },
          drawerActiveBackgroundColor: themeColor?.secondary,
          drawerStyle: {
            backgroundColor: themeColor?.background,
          },
        };
      }}
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
