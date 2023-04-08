import React, { useState } from "react";
import { Text, VStack, Link, Divider, Box, View } from "native-base";
import CustomButton from "../../components/customComponents/CustomButton";
import postLogin from "../../common/api/auth/postLogin";
import { useSelector } from "react-redux";
import { API_STATUS } from "../../common/enums/apiEnums";
import i18n from "../../common/localization/i18n";
import Loading from "../../components/loading/Loading";
import InputField from "../../components/forms/InputField";
import { useForm } from "react-hook-form";
import styles from "./Auth.styles";
import { useColorMode, useTheme } from "native-base";
import ShareIcons from "../../components/shareIcon/ShareIcons";

const Login = ({ navigation, route }) => {
  //useSelector
  const { loginStatus } = useSelector((state) => state?.auth);
  const { colorMode } = useColorMode();
  const theme = useTheme();
  const themeColor = theme.colors.mode[colorMode];

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
        <VStack display="flex" flex={1} bg={themeColor?.background}>
          <Text fontSize={40} ml={10} my={2} bold>
            {i18n.t("Login.LetsSign")}
          </Text>
          <Text fontSize={30} ml={10} bold>
            {i18n.t("Login.WelcomeBack")}
          </Text>
          <Text fontSize={30} ml={10} bold>
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
            buttonBg={themeColor?.buttonBg}
            buttonText={i18n.t("Login.Login")}
            buttonTextStyle={{ color: themeColor?.background, fontSize: 20 }}
          />

          <Box w={145} display="flex" flexDirection="row">
            <Divider mt={10} ml={12} mr={2} bg={themeColor?.text}></Divider>
            <Text mt={7} bold>
              or
            </Text>
            <Divider mt={10} ml={2} bg={themeColor?.text}></Divider>
          </Box>

          <ShareIcons />

          <Text mt="8%" mx={10} alignSelf="center">
            {i18n.t("Login.DontYouHaveAccount")}
            {` `}
            <Link
              onPress={onRegisterHandler}
              _text={{ color: themeColor?.text, fontWeight: "bold" }}
            >
              {i18n.t("Login.RegisterNow")}
            </Link>
          </Text>
        </VStack>
      )}
    </>
  );
};

export default Login;
