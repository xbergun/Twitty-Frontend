import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import bottomTabBarRoutes from "../routes/bottomTabRoutes";
import CustomIcon from '../components/customComponents/CustomIcon';
import homeRoutes from "../routes/homeRoutes";
import { HOME_ROUTES } from "./Constants";

const Tab = createBottomTabNavigator();

export default BottomTabNavigation = () => {
  return (
    <Tab.Navigator
    initialRouteName={HOME_ROUTES.HOME}
      screenOptions={
        {
          headerShown: false,
          tabBarShowLabel: false,
  
        }

        

        
      }
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
