import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import bottomTabBarRoutes from "../routes/bottomTabRoutes";
import CustomIcon from "../components/customComponents/CustomIcon";
import homeRoutes from "../routes/homeRoutes";
import { HOME_ROUTES } from "./Constants";
import { getThemeColor } from "../utils/theme/themeUtils";
import { getBottomTabBarScreenOptions } from "./screenOptions/BottomTabBarScreenOptions";

const Tab = createBottomTabNavigator();

export default BottomTabNavigation = () => {

  const theme = getThemeColor();

  return (
    <Tab.Navigator
      initialRouteName={HOME_ROUTES.HOME}
      screenOptions={({route}) =>getBottomTabBarScreenOptions(theme, route)}
    >
      {bottomTabBarRoutes.map((route, index) => {
        return (
          <Tab.Screen
            key={index}
            name={route.name}
            component={route.component}
            options={route.options}
          />
        );
      })}
    </Tab.Navigator>
  );
};
