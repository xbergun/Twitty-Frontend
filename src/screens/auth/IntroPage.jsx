import React from "react";
import { VStack, HStack } from "native-base";
import CustomButton from "../../components/customComponents/CustomButton.js";
import Carousel from "../../components/carousel/Carousel";
import i18n from "../../common/localization/i18n.js";
import { useColorMode, useTheme } from "native-base";

const FirstPage = ({ navigation }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const theme = useTheme();

  console.log("colorMode", colorMode)

  const onSignInHandler = () => {
    toggleColorMode(!colorMode);

    // navigation.navigate("Login");
  };

  const onRegisterHandler = () => {
    navigation.navigate("Register");
  };

  return (
    <VStack
      alignItems="center"
      display="flex"
      flex={1}
      bg={theme.colors.mode[colorMode]?.primary}
    >
      <VStack flex={6}>
        <Carousel />
      </VStack>
      <VStack flex={1}>
        <HStack mx={35}>
          <CustomButton
            width={"50%"}
            onPressHandler={onSignInHandler}
            buttonText={i18n.t("Intro.SignInButton")}
            buttonBg={"black"}
            buttonBorderBottomRightRadius={0}
            buttonBorderTopRightRadius={0}
            buttonTextStyle={{ fontSize: "25", fontWeight: "bold" }}
          />
          <CustomButton
            width={"50%"}
            onPressHandler={onRegisterHandler}
            buttonText={i18n.t("Intro.SignUpButton")}
            buttonBorderBottomLeftRadius={0}
            buttonBorderTopLeftRadius={0}
            buttonTextStyle={{ fontSize: "25", fontWeight: "bold" }}
          />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default FirstPage;
