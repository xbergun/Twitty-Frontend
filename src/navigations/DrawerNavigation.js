import { createDrawerNavigator } from "@react-navigation/drawer";
import drawerRoutes from "../routes/drawerRoutes";


const Drawer = createDrawerNavigator();

export default DrawerNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{}}>
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
