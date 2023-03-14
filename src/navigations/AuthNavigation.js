import { createNativeStackNavigator } from "@react-navigation/native-stack";
import authRoutes from "../routes/authRoutes";
import { AUTH_ROUTES } from "./Constants";

const Stack = createNativeStackNavigator();

export default AuthNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={AUTH_ROUTES.INTRO_PAGE}>
      {
        authRoutes.map((route, index) => {
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
