import React, { useState } from "react";
import {
  Button,
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
} from "native-base";
import {
  MaterialIcons,
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import CustomButton from "../../components/customComponents/customButton/CustomButton";

const Login = ({ navigation }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const onRegisterHandler = () => {
    navigation.navigate("Register");
  };
  const onLoginHandler = () => {
    navigation.navigate("Home");
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

      <Input
        h="6%"
        mt="5%"
        mx="10%"
        InputLeftElement={
          <Icon
            as={<MaterialIcons name="person" />}
            size={5}
            ml="2"
            color="muted.400"
          />
        }
        onChangeText={setName}
        value={name}
        placeholder="Name"
        placeholderTextColor="black"
      />

      <Input
        h="6%"
        my="2%"
        mx="10%"
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
        onChangeText={setPassword}
        value={password}
        placeholder="Enter your Password"
        placeholderTextColor="black"
      />

      <Text mb="8%" alignSelf="flex-end" mr={10} bold>
        Forgot Password?
      </Text>

      <CustomButton
        mx={10}
        onPressHandler={onLoginHandler}
        buttonBg={"black"}
        buttonText={"Sign in"}
        buttonTextStyle={{fontSize:"20",fontWeight:"bold"}}
      />

      <Box w={160} display="flex" flexDirection="row">
        <Divider mt="10" ml={10} mr={2} bg="black"></Divider>
        <Text mt="7" bold>
          or
        </Text>
        <Divider mt="10" ml={2} bg="black"></Divider>
      </Box>

      <Center mt={10}>
        <HStack space={3} alignContent="center">
          <Icon
            as={AntDesign}
            size="2xl"
            name="android1"
            color="coolGray.800"
            _dark={{
              color: "warmGray.50",
            }}
          />

          <Icon
            as={Entypo}
            size="2xl"
            name="app-store"
            color="coolGray.800"
            _dark={{
              color: "warmGray.50",
            }}
          />
          <Icon
            as={MaterialCommunityIcons}
            size="2xl"
            name="web"
            color="coolGray.800"
            _dark={{
              color: "warmGray.50",
            }}
          />
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
