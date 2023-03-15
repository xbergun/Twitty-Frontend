import { createDrawerNavigator } from '@react-navigation/drawer';
import { AUTH_ROUTES } from "./Constants";
import drawerRoutes from '../routes/drawerRoutes';
import { Text } from 'native-base';

const Drawer = createDrawerNavigator();

export default DrawerNavigation = () => {
  return (
    <Drawer.Navigator
    screenOptions={{
      headerShown: false,
  }}
    >
      {
        drawerRoutes.map((route, index) => {
            return (
                <Drawer.Screen
                    key={index}
                    name={route.name}
                    component={route.component}
                    options={route.options}
                />
            );
            })
      }
    </Drawer.Navigator>
  );
};
