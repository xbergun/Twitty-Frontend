import React from "react";
import { Center, HStack } from "native-base";
import CustomIcon from "../customComponents/CustomIcon";
import { AntDesign , Entypo,MaterialCommunityIcons } from '@expo/vector-icons';

const ShareIcons = () => {

  return (
    <Center mt={10}>
      <HStack space={3} alignContent="center">
        <CustomIcon as={AntDesign} iconName="android1" />
        <CustomIcon as={Entypo} iconName="app-store" />
        <CustomIcon as={MaterialCommunityIcons} iconName="web" />
      </HStack>
    </Center>
  );
};

export default ShareIcons;

