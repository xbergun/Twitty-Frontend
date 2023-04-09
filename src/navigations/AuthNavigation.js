import { createNativeStackNavigator } from "@react-navigation/native-stack";
import authRoutes from "../routes/authRoutes";
import { AUTH_ROUTES } from "./Constants";
import { useColorMode, useTheme } from "native-base";

const Stack = createNativeStackNavigator();

export default AuthNavigation = () => {

  const { colorMode, toggleColorMode } = useColorMode();
  const theme = useTheme();
  const themeColor = theme.colors.mode[colorMode];


  return (
    <Stack.Navigator
      initialRouteName={AUTH_ROUTES.INTRO_PAGE}
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: themeColor?.background,
        },
        headerTintColor: themeColor?.text,
      }}
    >
      {authRoutes.map((route, index) => {
        return (
          <Stack.Screen
            key={index}
            name={route.name}
            component={route.component}
            options={route.options}
          />
        );
      })}
    </Stack.Navigator>
  );
};
