import React, { useEffect, useState } from "react";
import {
  Text,
  VStack,
  HStack,
  Input,
  Icon,
  Pressable,
  Link,
  Divider,
  Box,
  Center,
  useToast,
} from "native-base";
import {
  MaterialIcons,
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import CustomButton from "../../components/customComponents/CustomButton";
import CustomToast from "../../components/customComponents/CustomToast.js";
import CustomIcon from "../../components/customComponents/CustomIcon";
import CustomInput from "../../components/customComponents/CustomInput";
import postLogin from "../../common/api/auth/postLogin";
import { useSelector } from "react-redux";
import { API_STATUS } from "../../common/enums/apiEnums";
import i18n from "../../common/localization/i18n";
import Loading from '../../components/loading/Loading';
import {AsyncStorage} from 'react-native';



const Login = ({ navigation ,route}) => {
  
  //useSelector
  const {loginStatus, userData} = useSelector((state) => state?.auth);  
  
  //useState
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  
  const {message} = route.params || false;
  
  useEffect(() => {
    if (loginStatus == API_STATUS.FAILURE) {
      alert("Kullanıcı adı veya şifre hatalı");
    }
  }, [loginStatus]);

  //Functions
  const onRegisterHandler = () => {
    navigation.navigate("Register");
  };

  const onLoginHandler = async () => {
    const requestBody = {
      username,
      password,
    };
    await postLogin(requestBody);
  };

  return (
    <>
    {message && alert("Register Succesfully") }
    {loginStatus == API_STATUS.REQUEST ? <Loading /> : (
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

      <CustomInput
        onChangeText={setUsername}
        value={username}
        labelName={i18n.t("Input.Username")}
        pl={8}
        InputLeftElement={
          <Icon
            style={{ position: "absolute" }}
            as={<MaterialIcons name="person" />}
            size={5}
            ml="2"
            color="muted.400"
          />
        }
      />
      <CustomInput
        onChangeText={setPassword}
        value={password}
        labelName={i18n.t("Input.Password")}
        type={show ? "text" : "password"}
        pl={8}
        InputLeftElement={
          <Icon
            style={{ position: "absolute" }}
            as={<MaterialIcons name="lock" />}
            size={5}
            ml="2"
            color="muted.400"
          />
        }
        InputRightElement={
          <Pressable onPress={() => setShow(!show)}>
            <Icon
              as={
                <MaterialIcons name={show ? "visibility" : "visibility-off"} />
              }
              size={5}
              mr="3"
              color="muted.400"
            />
          </Pressable>
        }
      />

      <Text mb="8%" alignSelf="flex-end" mr={10} bold>
      {i18n.t("Login.ForgotPassword")}
      </Text>

      <CustomButton
        mx={10}
        height={"8%"}
        width={"80%"}
        onPressHandler={onLoginHandler}
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
      {i18n.t("Login.DontYouHaveAccount")}{` `}
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
