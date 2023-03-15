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


const Login = ({ navigation }) => {
  const loginStatus = useSelector((state) => state?.auth?.loginStatus);
  const userData = useSelector((state) => state?.auth?.userData);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const toast = useToast();

  useEffect(() => {
    if (loginStatus === API_STATUS.SUCCESS) {

      alert("Login Success")

      navigation.navigate("Home");
    } else if (loginStatus === API_STATUS.FAILURE) {
      alert("Please check your credentials")
    }
  }, [loginStatus]);


  // useEffect(() => {
  //   if(userData) {
  //     AsyncStorage.setItem("accessToken", userData?.access_token);
  //   }
  // }, [userData]);

  const onRegisterHandler = () => {
    navigation.navigate("Register");
  };

  const onLoginHandler = async () => {
    const requestBody = {
      username,
      password,
    };
    await postLogin(JSON.stringify(requestBody))
    .catch((error) => {
      console.log("error", error);
    });
  };

  return (
    <VStack display="flex" flex={1} bg="white">
      <Text fontSize="40" alignSelf="flex-start" ml={10} my={2} bold>
        Lets Sign you in
      </Text>
      <Text fontSize="30" alignSelf="flex-start" ml={10} bold>
        Welcome Back ,
      </Text>
      <Text fontSize="30" alignSelf="flex-start" ml={10} bold>
        You have been missed
      </Text>

      <CustomInput
        onChangeText={setUsername}
        value={username}
        labelName={"Username"}
        pl={8}
        InputRightElement={
          <Icon
            style={{ position: "absolute", left: 0 }}
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
        labelName={"Password"}
        type={show ? "text" : "password"}
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
        Forgot Password?
      </Text>

      <CustomButton
        mx={10}
        height={"8%"}
        width={"80%"}
        onPressHandler={onLoginHandler}
        buttonBg={"black"}
        buttonText={"Sign in"}
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
        Don't you have an account?{" "}
        <Link fontWeight="bold" onPress={onRegisterHandler}>
          Register Now
        </Link>
      </Text>
    </VStack>
  );
};

export default Login;
