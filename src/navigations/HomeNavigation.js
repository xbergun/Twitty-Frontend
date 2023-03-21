import { createNativeStackNavigator } from "@react-navigation/native-stack";
import homeRoutes from "../routes/homeRoutes";
import { HOME_ROUTES } from "./Constants";


const Stack = createNativeStackNavigator();

export default HomeNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={HOME_ROUTES.HOME}
    >
      {
        homeRoutes.map((route, index) => {
            return (
            <Stack.Screen
                key={index}
                name={route.name}
                component={route.component}
                options={route.options}
                />
            );
            })
      }
    </Stack.Navigator>
  );
};
