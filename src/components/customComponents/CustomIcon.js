import React from 'react'
import { Icon } from 'native-base'
import {
  MaterialIcons,
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const CustomIcon = ({
    size="2xl",
    iconName,
    color="coolGray.800",
    as = MaterialIcons
}) => {
  return (
    <Icon
            as={as}
            size={size}
            name={iconName}
            color={color}
          />
  )
}

export default CustomIcon