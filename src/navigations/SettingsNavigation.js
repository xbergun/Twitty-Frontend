import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SETTINGS_ROUTES } from "./Constants";
import settingsRoutes from "../routes/settingsRoutes";

const Stack = createNativeStackNavigator();

export default SettingsNavigation = () => {
  return (
    <Stack.Navigator
        initialRouteName={SETTINGS_ROUTES.SETTINGS}
        screenOptions={{
          headerShown: false,
        }}
    >
      {
        settingsRoutes.map((route, index) => {
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
