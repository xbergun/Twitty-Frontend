import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text } from "native-base";
import drawerRoutes from "../routes/drawerRoutes";
import CustomDrawerContent from "../components/card/CustomDrawerContent";




const Drawer = createDrawerNavigator();

export default DrawerNavigation = () => {
  return (
    <Drawer.Navigator 
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    screenOptions={(route) => {
      return {
        headerShown: true,
        drawerLabel: () => {
          return (
            <Text>
              {route.route.name}
            </Text>
          );
        }
      };
    }}>
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
