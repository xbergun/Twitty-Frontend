import React from "react";
import { Icon, useColorMode } from "native-base";
import {
  MaterialIcons,
} from "@expo/vector-icons";

const CustomIcon = ({ 
  size = "2xl", 
  iconName, 
  color, 
  as = MaterialIcons 
}) => {
  const { colorMode } = useColorMode();
  return (
    <Icon
      as={as}
      size={size}
      name={iconName}
      color={color ? color : colorMode === "dark" ? "white" : "black"}
    />
  );
};

export default CustomIcon;
