import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import bottomTabBarRoutes from "../routes/bottomTabRoutes";
import CustomIcon from '../components/customComponents/CustomIcon';

const Tab = createBottomTabNavigator();

export default BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={
        {
          headerShown: false,
          tabBarShowLabel: false,
          tabBarInactiveBackgroundColor: "#A0C3D2",
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
