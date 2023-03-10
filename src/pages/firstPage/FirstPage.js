import React from "react";
import {VStack, HStack } from "native-base";
import CustomButton from "../../components/customComponents/CustomButton.js";
import Carousel from "../../components/carousel/Carousel";

const FirstPage = ({ navigation }) => {

  const onSignInHandler = () => {
    navigation.navigate("Login");
  };

  const onRegisterHandler = () => {
    navigation.navigate("Register");
  };

  return (
    <VStack alignItems="center" display="flex" flex={1} bg="white">
      <VStack flex={6}>
        <Carousel/>
      </VStack>
      <VStack flex={1}>
        <HStack mx={35}>
          <CustomButton
            width={"50%"}
            onPressHandler={onSignInHandler}
            buttonText={"Sign in"}
            buttonBg={"black"}
            buttonBorderBottomRightRadius={0}
            buttonBorderTopRightRadius={0}
            buttonTextStyle={{fontSize:"25",fontWeight:"bold"}}
          />
          <CustomButton
            width={"50%"}
            onPressHandler={onRegisterHandler}
            buttonText={"Register"}
            buttonBorderBottomLeftRadius={0}
            buttonBorderTopLeftRadius={0}
            buttonTextStyle={{fontSize:"25",fontWeight:"bold"}}
          />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default FirstPage;
