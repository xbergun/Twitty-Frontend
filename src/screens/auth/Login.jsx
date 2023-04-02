import React, { useEffect, useState } from "react";
import {
  Text,
  VStack,
  HStack,
  Link,
  Divider,
  Box,
  Center,
  View,
} from "native-base";
import {
  MaterialIcons,
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import CustomButton from "../../components/customComponents/CustomButton";
import CustomIcon from "../../components/customComponents/CustomIcon";
import CustomInput from "../../components/customComponents/CustomInput";
import postLogin from "../../common/api/auth/postLogin";
import { useSelector } from "react-redux";
import { API_STATUS } from "../../common/enums/apiEnums";
import i18n from "../../common/localization/i18n";
import Loading from "../../components/loading/Loading";
import InputField from "../../components/forms/InputField";
import { useForm } from "react-hook-form";
import styles from "./Auth.styles";

const Login = ({ navigation, route }) => {
  //useSelector
  const { loginStatus, userData } = useSelector((state) => state?.auth);

  //useState
  const [show, setShow] = useState(false);

  const { control, handleSubmit } = useForm();

  const { message } = route.params || false;


  //Functions
  const onRegisterHandler = () => {
    navigation.navigate("Register");
  };

  const onLoginHandler = async (requestBody) => {
    await postLogin(requestBody);
  };

  const rightIconOnPress = () => {
    setShow(!show);
  };

  return (
    <>
      {message && alert("Register Succesfully")}
      {loginStatus == API_STATUS.REQUEST ? (
        <Loading />
      ) : (
        <VStack display="flex" flex={1} bg="white">
          <Text fontSize="40" alignSelf="flex-start" ml={10} my={2} bold>
            {i18n.t("Login.LetsSign")}
          </Text>
          <Text fontSize="30" alignSelf="flex-start" ml={10} bold>
            {i18n.t("Login.WelcomeBack")}
          </Text>
          <Text fontSize="30" alignSelf="flex-start" ml={10} bold>
            {i18n.t("Login.Missed")}
          </Text>
          <View style={{ marginTop: 5 }}>
            <InputField
              control={control}
              name="username"
              rules={{ required: true, minLength: 5 }}
              placeholder={i18n.t("Input.Username")}
              style={styles.input}
              inputLeftElement
              leftIconName={"account-circle"}
            />

            <InputField
              control={control}
              name="password"
              rules={{ required: true, minLength: 5 }}
              placeholder={i18n.t("Input.Password")}
              style={styles.input}
              secureTextEntry={show ? false : true}
              inputLeftElement
              leftIconName={"lock"}
              inputRightElement
              rightIconName={show ? "visibility" : "visibility-off"}
              rightIconOnPress={rightIconOnPress}
            />
          </View>

          <Text mb="8%" alignSelf="flex-end" mr={10} bold>
            {i18n.t("Login.ForgotPassword")}
          </Text>

          <CustomButton
            mx={10}
            height={"8%"}
            width={"80%"}
            onPressHandler={handleSubmit(onLoginHandler)}
            buttonBg={"black"}
            buttonText={i18n.t("Login.Login")}
            buttonTextStyle={{ fontSize: "20", fontWeight: "bold" }}
          />

          <Box w={145} display="flex" flexDirection="row">
            <Divider mt="10" ml={10} mr={2} bg="black"></Divider>
            <Text mt="7" bold>
              or
            </Text>
            <Divider mt="10" ml={2} bg="black"></Divider>
          </Box>

          <Center mt={10}>
            <HStack space={3} alignContent="center">
              <CustomIcon as={AntDesign} iconName="android1" />
              <CustomIcon as={Entypo} iconName="app-store" />
              <CustomIcon as={MaterialCommunityIcons} iconName="web" />
            </HStack>
          </Center>

          <Text mt="8%" mx={10} alignSelf="center">
            {i18n.t("Login.DontYouHaveAccount")}
            {` `}
            <Link fontWeight="bold" onPress={onRegisterHandler}>
              {i18n.t("Login.RegisterNow")}
            </Link>
          </Text>
        </VStack>
      )}
    </>
  );
};

export default Login;
